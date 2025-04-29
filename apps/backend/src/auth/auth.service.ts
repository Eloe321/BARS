import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';

type AuthInput = { username: string; password: string };

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(input: AuthInput): Promise<User | null> {
    const user = await this.userService.findUserByUsername(input.username);

    if (user && user.password === input.password) {
      return {
        ...user,
      };
    }
    return null;
  }
}
