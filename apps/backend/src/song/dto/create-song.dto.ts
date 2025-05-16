/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { MusicSource } from 'generated/prisma';

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsEnum(MusicSource)
  musicSource: MusicSource;

  @IsOptional()
  @IsString()
  premade_music_id?: string;

  @IsOptional()
  @IsString()
  uploaded_music_id?: string;

  @IsNotEmpty()
  @IsString()
  file_path: string;
}
