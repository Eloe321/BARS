import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { SearchDictionaryDto } from './dto/search-dictionary.dto';
import { DictionarySearchResultDto } from './dto/dictionary-search-result.dto';
import { DictionaryEntry } from './entities/dictionary-entry.entity';
import { DictionaryXmlParser } from './dictionary-xml.parser';
import { PaginatedResponseDto } from '../common/dto/base-response.dto';

@Injectable()
export class DictionaryService {
  constructor(
    private db: DatabaseService,
    private xmlParser: DictionaryXmlParser,
  ) {}

  async search(searchDto: SearchDictionaryDto): Promise<PaginatedResponseDto<DictionarySearchResultDto>> {
    const { query, searchType, page = 1, limit = 10 } = searchDto;
    const skip = (page - 1) * limit;

    const whereConditions: any[] = [];

    if (searchType === 'word' || searchType === 'both') {
      whereConditions.push({
        OR: [
          { head: { contains: query, mode: 'insensitive' } },
          { normalized_head: { contains: query, mode: 'insensitive' } },
        ],
      });
    }

    if (searchType === 'translation' || searchType === 'both') {
      whereConditions.push({
        wced_entry: {
          wced_translation: {
            some: {
              translation: {
                contains: query,
                mode: 'insensitive',
              },
            },
          },
        },
      });
    }

    const where = whereConditions.length > 1 
      ? { OR: whereConditions } 
      : whereConditions[0];

    // Get all matching heads with their entry data
    const headResults = await this.db.wced_head.findMany({
      where,
      include: {
        wced_entry: {
          include: {
            wced_translation: true,
          },
        },
      },
      orderBy: [
        { type: 'desc' }, // 'm' (main) entries first
        { head: 'asc' },
      ],
    });

    // Filter out supplementary entries (those starting with †)
    const mainEntries = headResults.filter(h => !h.wced_entry.word.startsWith('†'));

    // Prioritize exact matches
    const queryLower = query.toLowerCase();
    const exactMatches = mainEntries.filter(h => 
      h.head.toLowerCase() === queryLower || 
      h.normalized_head.toLowerCase() === queryLower
    );
    
    const partialMatches = mainEntries.filter(h => 
      h.head.toLowerCase() !== queryLower && 
      h.normalized_head.toLowerCase() !== queryLower
    );

    // Sort: exact main > exact sub > partial main > partial sub
    const sortedResults = [
      ...exactMatches.filter(h => h.type === 'm'),
      ...exactMatches.filter(h => h.type !== 'm'),
      ...partialMatches.filter(h => h.type === 'm'),
      ...partialMatches.filter(h => h.type !== 'm'),
    ];

    // Get unique entries
    const uniqueEntriesMap = new Map();
    sortedResults.forEach(h => {
      if (!uniqueEntriesMap.has(h.entryid)) {
        uniqueEntriesMap.set(h.entryid, h.wced_entry);
      }
    });

    const uniqueEntries = Array.from(uniqueEntriesMap.values());
    const total = uniqueEntries.length;
    const paginatedEntries = uniqueEntries.slice(skip, skip + limit);

    // Convert to search result DTOs
    const results = paginatedEntries.map(entry => this.mapToSearchResult(entry));

    return {
      items: results,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findByWord(word: string): Promise<{ entry: DictionaryEntry; mergedSupplementaryEntries: number[] }> {
    // Find main entry
    const heads = await this.db.wced_head.findMany({
      where: {
        AND: [
          {
            OR: [
              { head: { equals: word, mode: 'insensitive' } },
              { normalized_head: { equals: word, mode: 'insensitive' } },
            ],
          },
          {
            wced_entry: {
              word: {
                not: {
                  startsWith: '†',
                },
              },
            },
          },
        ],
      },
      select: {
        entryid: true,
      },
    });

    if (!heads || heads.length === 0) {
      throw new NotFoundException(`Word '${word}' not found`);
    }

    const mainEntryId = heads[0].entryid;

    // Get main entry
    const mainEntry = await this.db.wced_entry.findUnique({
      where: { entryid: mainEntryId },
      include: {
        wced_translation: true,
      },
    });

    if (!mainEntry) {
      throw new NotFoundException(`Entry not found`);
    }

    // Find supplementary entries (those starting with †)
    const supplementaryEntries = await this.db.wced_entry.findMany({
      where: {
        word: `†${mainEntry.word}`,
      },
      include: {
        wced_translation: true,
      },
    });

    // Parse main entry
    const parsedMainEntry = await this.parseAndMapEntry(mainEntry);

    // Parse and merge supplementary entries
    const supplementaryIds: number[] = [];
    for (const suppEntry of supplementaryEntries) {
      const parsedSupp = await this.parseAndMapEntry(suppEntry);
      
      // Merge sub-entries
      parsedMainEntry.subEntries.push(...parsedSupp.subEntries);
      
      // Merge translations (remove duplicates)
      const existingTranslations = new Set(
        parsedMainEntry.translations.map(t => t.translation)
      );
      parsedSupp.translations.forEach(t => {
        if (!existingTranslations.has(t.translation)) {
          parsedMainEntry.translations.push(t);
          existingTranslations.add(t.translation);
        }
      });
      
      supplementaryIds.push(suppEntry.entryid);
    }

    return {
      entry: parsedMainEntry,
      mergedSupplementaryEntries: supplementaryIds,
    };
  }

  async findByEntryId(entryId: number): Promise<{ entry: DictionaryEntry; mergedSupplementaryEntries: number[] }> {
    const mainEntry = await this.db.wced_entry.findUnique({
      where: { entryid: entryId },
      include: {
        wced_translation: true,
      },
    });

    if (!mainEntry) {
      throw new NotFoundException(`Entry with ID ${entryId} not found`);
    }

    // If this is a supplementary entry, redirect to main entry
    if (mainEntry.word.startsWith('†')) {
      const mainWord = mainEntry.word.substring(1); // Remove †
      return this.findByWord(mainWord);
    }

    // Find supplementary entries
    const supplementaryEntries = await this.db.wced_entry.findMany({
      where: {
        word: `†${mainEntry.word}`,
      },
      include: {
        wced_translation: true,
      },
    });

    // Parse and merge
    const parsedMainEntry = await this.parseAndMapEntry(mainEntry);
    const supplementaryIds: number[] = [];

    for (const suppEntry of supplementaryEntries) {
      const parsedSupp = await this.parseAndMapEntry(suppEntry);
      parsedMainEntry.subEntries.push(...parsedSupp.subEntries);
      
      const existingTranslations = new Set(
        parsedMainEntry.translations.map(t => t.translation)
      );
      parsedSupp.translations.forEach(t => {
        if (!existingTranslations.has(t.translation)) {
          parsedMainEntry.translations.push(t);
        }
      });
      
      supplementaryIds.push(suppEntry.entryid);
    }

    return {
      entry: parsedMainEntry,
      mergedSupplementaryEntries: supplementaryIds,
    };
  }

  private mapToSearchResult(dbData: any): DictionarySearchResultDto {
    // Extract form from XML (simple extraction without full parsing)
    const formMatch = dbData.entry.match(/lang="ceb">([^<]+)</);
    const form = formMatch ? formMatch[1] : dbData.word;

    // Get first few translations as preview
    const translations = dbData.wced_translation
      .slice(0, 5)
      .map(t => t.translation);

    // Create preview from first translation
    const preview = translations.slice(0, 3).join(', ') + 
      (translations.length > 3 ? '...' : '');

    return {
      entryid: dbData.entryid,
      word: dbData.word,
      form: form,
      page: dbData.page,
      translations: translations,
      preview: preview,
    };
  }

  private async parseAndMapEntry(dbData: any): Promise<DictionaryEntry> {
    const parsed = await this.xmlParser.parseEntry(
      dbData.entry,
      dbData.entryid,
      dbData.word
    );

    return {
      ...parsed,
      translations: dbData.wced_translation || [],
    };
  }
}