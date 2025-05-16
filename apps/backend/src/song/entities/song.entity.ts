import { MusicSource } from 'generated/prisma';

export class Song {
  id: string;
  user_id: string;
  musicSource: MusicSource;
  premade_music_id?: string;
  uploaded_music_id?: string;
  file_path: string;
  creation_date: Date;

  isUploaded(): boolean {
    return this.musicSource === MusicSource.UPLOADED;
  }
}
