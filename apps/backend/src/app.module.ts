import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';
import { MusicModule } from './music/music.module';
import { LinkModule } from './link/link.module';
import { StickyNotesModule } from './sticky-notes/sticky-notes.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    SessionModule,
    MusicModule,
    LinkModule,
    StickyNotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
