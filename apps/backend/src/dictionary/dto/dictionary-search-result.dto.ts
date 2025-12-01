import { ApiProperty } from '@nestjs/swagger';

export class DictionarySearchResultDto {
  @ApiProperty({ description: 'Entry ID' })
  entryid: number;

  @ApiProperty({ description: 'Main word' })
  word: string;

  @ApiProperty({ description: 'Word form with diacritics' })
  form: string;

  @ApiProperty({ description: 'Page reference' })
  page: string;

  @ApiProperty({ 
    type: [String], 
    description: 'Brief list of translations',
    example: ['crazy', 'insane', 'fool']
  })
  translations: string[];

  @ApiProperty({ 
    description: 'Brief preview of the entry',
    example: 'insane, crazy, naughty...'
  })
  preview: string;
}