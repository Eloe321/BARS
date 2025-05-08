import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,

      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;

    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.databaseService.user.findMany({});
  }

  async findOne(id: string) {
    return await this.databaseService.user.findUnique({ where: { id } });
  }
  async findUserByUsername(username: string) {
    return await this.databaseService.user.findUnique({ where: { username } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,

        roundsOfHashing,
      );
    }
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
