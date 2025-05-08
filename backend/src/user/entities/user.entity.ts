import { ApiProperty } from '@nestjs/swagger';
import { User } from 'generated/prisma';
import { Exclude } from '@nestjs/class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  createAt: Date;

  @ApiProperty()
  updateAt: Date;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Exclude()
  password: string;
}
