import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return await this.databaseService.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.databaseService.user.findMany({});
  }

  async findOne(id: string) {
    return (await this.databaseService.user.findUnique({
      where: { id },
    })) as User;
  }
  async findUserByUsername(username: string) {
    return (await this.databaseService.user.findUnique({
      where: { username },
    })) as User;
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return await this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.user.delete({
      where: { id },
    });
  }
}
