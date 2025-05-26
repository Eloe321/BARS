import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SongModule } from './song/song.module';
import { MusicModule } from './music/music.module';
import { LinkModule } from './link/link.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    SongModule,
    MusicModule,
    LinkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
