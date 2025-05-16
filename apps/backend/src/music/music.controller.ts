/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Req,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { Prisma } from 'generated/prisma';
import { join } from 'path';
import { tmpdir } from 'os';
import fs from 'fs';
import { uploadFile } from '../storageScripts/access';
import { FileInterceptor } from '@nestjs/platform-express';
import { MP3ValidationPipe } from 'src/storageScripts/validator';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';
import { Request } from 'express';
import { User } from 'generated/prisma';

interface RequestWithUser extends Request {
  user: User;
}
@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadMP3(
    @UploadedFile(new MP3ValidationPipe()) file: Express.Multer.File,
    @Body() body: Prisma.UploadedMusicCreateInput,
  ): Promise<{ success: boolean; path: string }> {
    const prismabody = await this.musicService.createMusicUpload(body);
    // Create a temp file path
    const tempFilePath = join(tmpdir(), `upload-${Date.now()}.mp3`);

    // Write buffer to temp file
    await fs.promises.writeFile(tempFilePath, file.buffer);

    try {
      // Use your existing uploadFile function
      await uploadFile(`/Uploaded Music/${prismabody.music_id}`, tempFilePath);
      return { success: true, path: `/Uploaded Music/${prismabody.music_id}` };
    } finally {
      // Clean up the temp file
      await fs.promises.unlink(tempFilePath);
    }
  }

  @Get('uploaded')
  @UseGuards(JwtAuthGuard)
  findAllUploadedMusic(@Req() request: RequestWithUser) {
    const userId = request.user?.id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.musicService.findAlluploadedMusicByUserId(userId);
  }
  @Get('premade')
  findAllPremadeMusic() {
    return this.musicService.findAllPremadeMusic();
  }

  @Get('premade/:id')
  findOnePremadeMusic(@Param('id') id: string) {
    return this.musicService.findOnePremadeMusic(id);
  }

  @Get('uploaded/:id')
  findOneUploadedMusic(@Param('id') id: string) {
    return this.musicService.findOneUploadeddMusic(id);
  }

  @Delete('uploaded/:id')
  removeUploadedMusic(@Param('id') id: string) {
    return this.musicService.removeUploadedMusic(id);
  }
}
