import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { UserEntity } from './entities/user.entity';
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

    const user = await this.databaseService.user.create({
      data: createUserDto,
    });

    return new UserEntity(user);
  }

  async findAll() {
    const users = await this.databaseService.user.findMany({});
    return users.map(user => new UserEntity(user));
  }

  async findOne(id: string) {
    const user = await this.databaseService.user.findUnique({ where: { id } });
    return user ? new UserEntity(user) : null;
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
    const user = await this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });

    return new UserEntity(user);
  }

  async remove(id: string) {
    const user = await this.databaseService.user.delete({
      where: { id },
    });

    return new UserEntity(user);
  }
}
