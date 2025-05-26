/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class MusicService {
  constructor(private readonly db: DatabaseService) {}

  async createMusicUpload(createMusicDto: Prisma.UploadedMusicCreateInput) {
    return await this.db.uploadedMusic.create({
      data: createMusicDto,
    });
  }

  async findAllPremadeMusic() {
    return await this.db.premadeMusic.findMany();
  }

  async findAlluploadedMusicByUserId(userId: string) {
    return await this.db.uploadedMusic.findMany({
      where: {
        uploaded_by: userId,
      },
    });
  }

  async findOnePremadeMusic(id: string) {
    return await this.db.premadeMusic.findUnique({
      where: {
        music_id: id,
      },
    });
  }

  async findPremadeMusicByName(name: string) {
    return await this.db.premadeMusic.findUnique({
      where: {
        music_name: name,
      },
    });
  }

  async findOneUploadedMusic(id: string) {
    return await this.db.uploadedMusic.findUnique({
      where: {
        music_id: id,
      },
    });
  }

  async findUploadedMusicByName(name: string) {
    return await this.db.uploadedMusic.findUnique({
      where: {
        music_name: name,
      },
    });
  }

  async removeUploadedMusic(id: string) {
    return await this.db.uploadedMusic.delete({
      where: {
        music_id: id,
      },
    });
  }
}
