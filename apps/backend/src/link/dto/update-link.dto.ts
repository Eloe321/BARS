/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
export class UpdateLinkDto {
  @ApiPropertyOptional({
    description: 'Whether the link is public or private',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  is_public?: boolean;

  @ApiPropertyOptional({
    description: 'When the link should expire',
    example: '2026-01-31T23:59:59Z',
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  expires_at?: Date;
}

export class AddLinkPermissionDto {
  @ApiProperty({
    description: 'ID of the user to grant permission to',
    example: '5f9d7a3e-8c1f-4b5c-9b7a-6a2e4d8f9c1d',
  })
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({
    description: 'Whether the user can view the link',
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  can_view?: boolean = true;
}

export class LinkResponseDto {
  @ApiProperty()
  link_id: string;

  @ApiProperty()
  song_id: string;

  @ApiProperty()
  created_by: string;

  @ApiProperty()
  is_public: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  expires_at: Date;

  @ApiProperty({
    description: 'Whether the link has expired',
    example: false,
  })
  get isExpired(): boolean {
    return new Date() > this.expires_at;
  }
}
