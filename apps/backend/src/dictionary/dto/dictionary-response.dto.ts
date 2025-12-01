import { ApiProperty } from '@nestjs/swagger';
import { DictionarySearchResultDto } from './dictionary-search-result.dto';

export class DictionarySearchResponseDto {
  @ApiProperty({ 
    type: [DictionarySearchResultDto], 
    description: 'Array of matching entries (main entries only, no supplementary)' 
  })
  results: DictionarySearchResultDto[];

  @ApiProperty({ 
    description: 'Total number of results found',
    example: 42
  })
  total: number;

  @ApiProperty({ 
    description: 'Current page number',
    example: 1
  })
  page: number;

  @ApiProperty({ 
    description: 'Number of results per page',
    example: 10
  })
  limit: number;

  @ApiProperty({ 
    description: 'Total number of pages available',
    example: 5
  })
  totalPages: number;
}