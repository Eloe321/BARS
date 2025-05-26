export enum MusicSource {
  PREMADE = "PREMADE",
  UPLOADED = "UPLOADED",
}

export interface Song {
  id?: string;
  user_id: string;
  title: string;
  content: string;
  musicSource: MusicSource;
  premade_music_id?: string;
  uploaded_music_id?: string;
  creation_date: string;
}
