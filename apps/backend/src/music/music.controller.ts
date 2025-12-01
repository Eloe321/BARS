import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MusicService } from './music.service';
import { Prisma } from 'generated/prisma';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';
import { Request } from 'express';
import { User } from 'generated/prisma';

interface RequestWithUser extends Request {
  user: User;
}

@Controller('music')
@ApiTags('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post('uploaded')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Upload music file' })
  @ApiResponse({ status: 201, description: 'Music uploaded successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async uploadMP3(@Body() body: Prisma.UploadedMusicCreateInput) {
    return this.musicService.createMusicUpload(body);
  }

  @Get('premade')
  @ApiOperation({ summary: 'Get all premade music' })
  @ApiResponse({ status: 200, description: 'Premade music retrieved successfully' })
  async findAllPremadeMusic() {
    return this.musicService.findAllPremadeMusic();
  }

  @Get('premade/name/:music_name')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get premade music by name' })
  @ApiResponse({ status: 200, description: 'Premade music retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Music not found' })
  findPremadeMusicByName(@Param('music_name') music_name: string) {
    return this.musicService.findPremadeMusicByName(music_name);
  }

  @Get('premade/:id')
  @ApiOperation({ summary: 'Get premade music by ID' })
  @ApiResponse({ status: 200, description: 'Premade music retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Music not found' })
  findOnePremadeMusic(@Param('id') id: string) {
    return this.musicService.findOnePremadeMusic(id);
  }

  @Get('uploaded')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all uploaded music for current user' })
  @ApiResponse({ status: 200, description: 'Uploaded music retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findAllUploadedMusic(@Req() request: RequestWithUser) {
    const userId = request.user?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.musicService.findAlluploadedMusicByUserId(userId);
  }

  @Get('uploaded/name/:music_name')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get uploaded music by name' })
  @ApiResponse({ status: 200, description: 'Uploaded music retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Music not found' })
  findUploadedMusicByName(@Param('music_name') music_name: string) {
    return this.musicService.findUploadedMusicByName(music_name);
  }

  @Get('uploaded/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get uploaded music by ID' })
  @ApiResponse({ status: 200, description: 'Uploaded music retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Music not found' })
  findOneUploadedMusic(@Param('id') id: string) {
    return this.musicService.findOneUploadedMusic(id);
  }

  @Delete('uploaded/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete uploaded music by ID' })
  @ApiResponse({ status: 200, description: 'Uploaded music deleted successfully' })
  @ApiResponse({ status: 404, description: 'Music not found' })
  removeUploadedMusic(@Param('id') id: string) {
    return this.musicService.removeUploadedMusic(id);
  }
}
