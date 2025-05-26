import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';

@Injectable()
export class SongService {
  constructor(private db: DatabaseService) {}

  async create(createSongDto: CreateSongDto): Promise<Song> {
    const song = await this.db.song.create({
      data: createSongDto,
    });
    return this.mapToEntity(song);
  }

  async findAll(filters = {}): Promise<Song[]> {
    const songs = await this.db.song.findMany({
      where: filters,
      include: {
        premadeMusic: true,
        uploadedMusic: true,
      },
    });
    return songs.map((song) => this.mapToEntity(song));
  }

  async findOne(id: string): Promise<Song> {
    const song = await this.db.song.findUnique({
      where: { id },
      include: {
        premadeMusic: true,
        uploadedMusic: true,
      },
    });
    if (!song) {
      throw new Error('Song not found');
    }
    return this.mapToEntity(song);
  }

  async update(id: string, updateSongDto: UpdateSongDto): Promise<Song> {
    const song = await this.db.song.update({
      where: { id },
      data: updateSongDto,
      include: {
        premadeMusic: true,
        uploadedMusic: true,
      },
    });
    return this.mapToEntity(song);
  }

  async remove(id: string): Promise<Song> {
    const song = await this.db.song.delete({
      where: { id },
      include: {
        premadeMusic: true,
        uploadedMusic: true,
      },
    });
    return this.mapToEntity(song);
  }

  private mapToEntity(dbData: any): Song {
    const song = new Song();
    Object.assign(song, dbData);
    return song;
  }
}
