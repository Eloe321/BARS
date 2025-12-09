// Export all services from a central location
export { MusicService } from "./music.service";
export { SongsService } from "./songs.service";
export { FilesService } from "./files.service";

// Export types
export type { UploadMusicDto, MusicResponse } from "./music.service";

export type {
  CreateSongDto,
  UpdateSongDto,
  SongResponse,
} from "./songs.service";

export type { DatabaseFile, DatabaseFilesResponse } from "./files.service";
