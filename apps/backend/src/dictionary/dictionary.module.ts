import { Module } from '@nestjs/common';
import { DictionaryController } from './dictionary.controller';
import { DictionaryService } from './dictionary.service';
import { DictionaryXmlParser } from './dictionary-xml.parser';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DictionaryController],
  providers: [DictionaryService, DictionaryXmlParser],
  exports: [DictionaryService],
})
export class DictionaryModule {}