import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseDto } from '../../common/dto/base-response.dto';
import { DictionaryEntry } from '../entities/dictionary-entry.entity';

export class DictionaryDetailDataDto {
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

export class DictionaryDetailResponseDto extends BaseResponseDto<DictionaryDetailDataDto> {}