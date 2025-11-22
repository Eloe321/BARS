import {
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { MusicSource } from 'generated/prisma';

export class CreateSessionDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsEnum(MusicSource)
  @IsOptional()
  musicSource?: MusicSource;

  @IsOptional()
  @IsString()
  premade_music_id?: string;

  @IsOptional()
  @IsString()
  uploaded_music_id?: string;

  @IsJSON()
  audio_timeline: any;
}
