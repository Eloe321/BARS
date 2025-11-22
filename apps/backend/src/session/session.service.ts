import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionService {
  constructor(private db: DatabaseService) {}

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const session = await this.db.session.create({
      data: createSessionDto,
    });
    return this.mapToEntity(session);
  }

  async findAll(filters = {}): Promise<Session[]> {
    const sessions = await this.db.session.findMany({
      where: filters,
      include: {
        premadeMusic: true,
        uploadedMusic: true,
      },
    });
    return sessions.map((session) => this.mapToEntity(session));
  }

  async findOne(id: string): Promise<Session> {
    const session = await this.db.session.findUnique({
      where: { id },
      include: {
        premadeMusic: true,
        uploadedMusic: true,
      },
    });
    if (!session) {
      throw new Error('Session not found');
    }
    return this.mapToEntity(session);
  }

  async update(
    id: string,
    updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    const session = await this.db.session.update({
      where: { id },
      data: updateSessionDto,
      include: {
        premadeMusic: true,
        uploadedMusic: true,
      },
    });
    return this.mapToEntity(session);
  }

  async remove(id: string): Promise<Session> {
    const session = await this.db.session.delete({
      where: { id },
      include: {
        premadeMusic: true,
        uploadedMusic: true,
      },
    });
    return this.mapToEntity(session);
  }

  private mapToEntity(dbData: any): Session {
    const session = new Session();
    Object.assign(session, dbData);
    return session;
  }
}
