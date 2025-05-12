/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSongDto {
  @ApiPropertyOptional({
    description: 'Path to the updated song lyrics and notes file',
    example: '/lyrics/updated-song.txt',
  })
  @IsString()
  @IsOptional()
  file_path?: string;
}

export class SongResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  file_path: string;

  @ApiProperty()
  creation_date: Date;
}
