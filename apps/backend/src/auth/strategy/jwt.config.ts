import { JwtModuleOptions } from '@nestjs/jwt';
import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();
export default registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: '1d',
    },
  }),
);

export const jwtSecret = process.env.JWT_SECRET;
