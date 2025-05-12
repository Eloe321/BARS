/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
  @ApiProperty({
    description: 'Path to the song lyrics and notes file',
    example: '/lyrics/my-new-song.txt',
  })
  @IsString()
  @IsNotEmpty()
  file_path: string;
}
