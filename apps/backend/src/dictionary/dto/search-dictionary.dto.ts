import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, Min, Max, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum SearchType {
  WORD = 'word',
  TRANSLATION = 'translation',
  BOTH = 'both',
}

export class SearchDictionaryDto {
  @ApiProperty({
    description: 'Search query for word or translation',
    example: 'maayo',
  })
  @IsString()
  query: string;

  @ApiPropertyOptional({
    description: 'Search type: word, translation, or both',
    enum: SearchType,
    default: SearchType.BOTH,
  })
  @IsOptional()
  @IsEnum(SearchType)
  searchType?: SearchType = SearchType.BOTH;

  @ApiPropertyOptional({
    description: 'Page number for pagination',
    default: 1,
    minimum: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    description: 'Number of results per page',
    default: 10,
    minimum: 1,
    maximum: 100,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;
}