import { ApiProperty } from '@nestjs/swagger';
import { DictionaryEntry } from '../entities/dictionary-entry.entity';

export class DictionaryDetailResponseDto {
  @ApiProperty({ 
    description: 'Complete entry with all supplementary entries merged',
    type: DictionaryEntry
  })
  entry: DictionaryEntry;

  @ApiProperty({ 
    type: [Number], 
    description: 'Entry IDs of supplementary entries that were merged',
    example: [21199]
  })
  mergedSupplementaryEntries: number[];
}