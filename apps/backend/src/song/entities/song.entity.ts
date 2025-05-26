import { MusicSource } from 'generated/prisma';

export class Song {
  id: string;
  user_id: string;
  title: string;
  content: string;
  musicSource: MusicSource;
  premade_music_id?: string;
  uploaded_music_id?: string;
  creation_date: Date;

  isUploaded(): boolean {
    return this.musicSource === MusicSource.UPLOADED;
  }
}
