import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MusicService {
  constructor(private readonly db: DatabaseService) {}
  async create(createMusicDto: Prisma.MusicCreateInput) {
    return await this.db.music.create({
      data: createMusicDto,
    });
  }

  async findAll() {
    return await this.db.music.findMany();
  }

  async findOne(id: string) {
    return await this.db.music.findUnique({
      where: {
        music_id: id,
      },
    });
  }

  async update(id: string, updateMusicDto: Prisma.MusicUpdateInput) {
    return await this.db.music.update({
      where: {
        music_id: id,
      },
      data: updateMusicDto,
    });
  }

  async remove(id: string) {
    return await this.db.music.delete({
      where: {
        music_id: id,
      },
    });
  }
}
