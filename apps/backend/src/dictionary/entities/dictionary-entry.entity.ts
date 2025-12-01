import { ApiProperty } from '@nestjs/swagger';

export class DictionaryTranslation {
  @ApiProperty({ description: 'Translation text' })
  translation: string;
}

export class DictionaryExample {
  @ApiProperty({ description: 'Example in Cebuano (italicized text)' })
  cebuano: string;

  @ApiProperty({ description: 'Translation of the example' })
  translation: string;
}

export class DictionarySense {
  @ApiProperty({ description: 'Sense number' })
  number?: string;

  @ApiProperty({ description: 'Translation text' })
  translation: string;

  @ApiProperty({ type: [String], description: 'English translations' })
  translations: string[];

  @ApiProperty({ type: [DictionaryExample], description: 'Usage examples' })
  examples: DictionaryExample[];

  @ApiProperty({ description: 'Cross references to other entries' })
  crossReferences?: string[];
}

export class DictionaryHomonym {
  @ApiProperty({ 
    description: 'Part of speech (n=noun, v=verb, a=adjective, adv=adverb, etc.)',
    example: 'n'
  })
  pos?: string;

  @ApiProperty({ type: [DictionarySense], description: 'Senses/meanings' })
  senses: DictionarySense[];
}

export class DictionarySubEntry {
  @ApiProperty({ description: 'Form ID' })
  formId: string;

  @ApiProperty({ description: 'Word form' })
  form: string;

  @ApiProperty({ description: 'Normalized form' })
  normalizedForm?: string;

  @ApiProperty({ type: [DictionaryHomonym], description: 'Homonyms' })
  homonyms: DictionaryHomonym[];
}

export class DictionaryEntry {
  @ApiProperty({ description: 'Entry ID' })
  entryid: number;

  @ApiProperty({ description: 'Main word' })
  word: string;

  @ApiProperty({ description: 'Page reference' })
  page: string;

  @ApiProperty({ description: 'Form ID' })
  formId: string;

  @ApiProperty({ description: 'Word form with diacritics' })
  form: string;

  @ApiProperty({ description: 'Language code' })
  language: string;

  @ApiProperty({ type: [DictionaryHomonym], description: 'Homonyms for main entry' })
  homonyms: DictionaryHomonym[];

  @ApiProperty({ type: [DictionarySubEntry], description: 'Sub-entries and related forms' })
  subEntries: DictionarySubEntry[];

  @ApiProperty({ type: [DictionaryTranslation], description: 'Simple translations list' })
  translations: DictionaryTranslation[];
}