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
import { MusicService } from './music.service';
import { Prisma } from 'generated/prisma';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';
import { Request } from 'express';
import { User } from 'generated/prisma';

interface RequestWithUser extends Request {
  user: User;
}

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post('uploaded')
  @UseGuards(JwtAuthGuard)
  async uploadMP3(@Body() body: Prisma.UploadedMusicCreateInput) {
    return this.musicService.createMusicUpload(body);
  }

  @Get('uploaded')
  @UseGuards(JwtAuthGuard)
  async findAllUploadedMusic(@Req() request: RequestWithUser) {
    const userId = request.user?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.musicService.findAlluploadedMusicByUserId(userId);
  }
  @Get('premade')
  async findAllPremadeMusic() {
    return await this.musicService.findAllPremadeMusic();
  }

  @Get('premade/:id')
  findOnePremadeMusic(@Param('id') id: string) {
    return this.musicService.findOnePremadeMusic(id);
  }

  @Get('uploaded/:id')
  @UseGuards(JwtAuthGuard)
  findOneUploadedMusic(@Param('id') id: string) {
    return this.musicService.findOneUploadeddMusic(id);
  }

  @Delete('uploaded/:id')
  removeUploadedMusic(@Param('id') id: string) {
    return this.musicService.removeUploadedMusic(id);
  }
}
