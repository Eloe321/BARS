import { Injectable } from '@nestjs/common';
import * as xml2js from 'xml2js';

interface ParsedSense {
  number?: string;
  translation: string;
  translations: string[];
  examples: Array<{ cebuano: string; translation: string }>;
  crossReferences?: string[];
}

interface ParsedHomonym {
  pos?: string;
  senses: ParsedSense[];
}

interface ParsedSubEntry {
  formId: string;
  form: string;
  normalizedForm?: string;
  homonyms: ParsedHomonym[];
}

interface ParsedEntry {
  entryid: number;
  word: string;
  page: string;
  formId: string;
  form: string;
  language: string;
  homonyms: ParsedHomonym[];
  subEntries: ParsedSubEntry[];
}

@Injectable()
export class DictionaryXmlParser {
  private parser: xml2js.Parser;

  constructor() {
    this.parser = new xml2js.Parser({
      explicitArray: false,
      mergeAttrs: true,
      trim: true,
      normalizeTags: true,
    });
  }

  async parseEntry(xmlString: string, entryId: number, word: string): Promise<ParsedEntry> {
    try {
      const result = await this.parser.parseStringPromise(xmlString);
      const entry = result.entry;

      return {
        entryid: entryId,
        word: word,
        page: entry.page || '',
        formId: entry.form?.id || '',
        form: this.extractText(entry.form),
        language: entry.form?.lang || 'ceb',
        homonyms: this.parseHomonyms(entry.hom),
        subEntries: this.parseSubEntries(entry.entry),
      };
    } catch (error) {
      console.error('Error parsing XML:', error);
      // Return basic structure if parsing fails
      return {
        entryid: entryId,
        word: word,
        page: '',
        formId: '',
        form: word,
        language: 'ceb',
        homonyms: [],
        subEntries: [],
      };
    }
  }

  private parseHomonyms(homData: any): ParsedHomonym[] {
    if (!homData) return [];
    
    const homs = Array.isArray(homData) ? homData : [homData];
    return homs.map(hom => ({
      pos: hom.role || this.extractText(hom.pos),
      senses: this.parseSenses(hom.sense),
    }));
  }

  private parseSenses(senseData: any): ParsedSense[] {
    if (!senseData) return [];
    
    const senses = Array.isArray(senseData) ? senseData : [senseData];
    return senses.map(sense => {
      const translations = this.extractTranslations(sense.trans);
      return {
        number: sense.number ? this.extractText(sense.number) : undefined,
        translation: this.extractFullTranslation(sense.trans),
        translations: translations,
        examples: this.parseExamples(sense.eg),
        crossReferences: this.extractCrossReferences(sense.trans),
      };
    });
  }

  private parseExamples(egData: any): Array<{ cebuano: string; translation: string }> {
    if (!egData) return [];
    
    const examples = Array.isArray(egData) ? egData : [egData];
    return examples.map(eg => ({
      cebuano: this.extractText(eg.i),
      translation: this.extractText(eg.trans),
    })).filter(ex => ex.cebuano || ex.translation);
  }

  private parseSubEntries(entryData: any): ParsedSubEntry[] {
    if (!entryData) return [];
    
    const entries = Array.isArray(entryData) ? entryData : [entryData];
    return entries.map(entry => ({
      formId: entry.form?.id || '',
      form: this.extractText(entry.form),
      normalizedForm: entry.form?.normalized || undefined,
      homonyms: this.parseHomonyms(entry.hom),
    })).filter(sub => sub.form);
  }

  private extractTranslations(transData: any): string[] {
    if (!transData) return [];
    
    const translations: string[] = [];
    const transArray = Array.isArray(transData) ? transData : [transData];
    
    for (const trans of transArray) {
      if (typeof trans === 'string') {
        translations.push(trans.trim());
      } else if (trans.tr) {
        const trs = Array.isArray(trans.tr) ? trans.tr : [trans.tr];
        trs.forEach(tr => {
          const text = this.extractText(tr);
          if (text) translations.push(text);
        });
      }
    }
    
    return [...new Set(translations)]; // Remove duplicates
  }

  private extractFullTranslation(transData: any): string {
    if (!transData) return '';
    
    if (typeof transData === 'string') {
      return transData.trim();
    }
    
    if (Array.isArray(transData)) {
      return transData.map(t => this.extractText(t)).join(' ').trim();
    }
    
    return this.extractText(transData);
  }

  private extractCrossReferences(transData: any): string[] | undefined {
    if (!transData || !transData.xr) return undefined;
    
    const xrs = Array.isArray(transData.xr) ? transData.xr : [transData.xr];
    const refs = xrs
      .map(xr => this.extractText(xr.sc || xr))
      .filter(ref => ref);
    
    return refs.length > 0 ? refs : undefined;
  }

  private extractText(data: any): string {
    if (!data) return '';
    if (typeof data === 'string') return data.trim();
    if (data._) return data._.trim();
    if (typeof data === 'object') {
      return Object.values(data)
        .filter(v => typeof v === 'string')
        .join(' ')
        .trim();
    }
    return '';
  }
}