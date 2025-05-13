/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { Prisma } from 'generated/prisma';
import { join } from 'path';
import { tmpdir } from 'os';
import fs from 'fs';
import { uploadFile } from '../storageScripts/access';
import { FileInterceptor } from '@nestjs/platform-express';
import { MP3ValidationPipe } from 'src/storageScripts/validator';
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
    await fs.promises.writeFile(tempFilePath, file.buffer as Buffer);

    try {
      // Use your existing uploadFile function
      await uploadFile(
        `/Uploaded Music/${prismabody.music_id as string}`,
        tempFilePath,
      );
      return { success: true, path: `/Uploaded Music/${prismabody.music_id}` };
    } finally {
      // Clean up the temp file
      await fs.promises.unlink(tempFilePath);
    }
  }

  @Get()
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMusicDto: Prisma.MusicUpdateInput,
  ) {
    return this.musicService.update(id, updateMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicService.remove(id);
  }
}
