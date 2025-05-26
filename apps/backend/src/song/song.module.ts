import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [SongController],
  providers: [SongService],
  imports: [DatabaseModule],
  exports: [SongService],
})
export class SongModule {}
