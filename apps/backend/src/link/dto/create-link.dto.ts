/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLinkDto {
  @ApiProperty({
    description: 'ID of the song to create a link for',
    example: '5f9d7a3e-8c1f-4b5c-9b7a-6a2e4d8f9c1d',
  })
  @IsUUID()
  @IsNotEmpty()
  song_id: string;

  @ApiProperty({
    description: 'Whether the link is public or private',
    example: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  is_public?: boolean = false;

  @ApiProperty({
    description: 'When the link should expire',
    example: '2025-12-31T23:59:59Z',
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  expires_at: Date;

  // Don't include created_by as it should come from the authenticated user
  // Don't include created_at as it will be set by default in Prisma
}
