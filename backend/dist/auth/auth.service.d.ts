import { DatabaseService } from '../database/database.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: DatabaseService, jwtService: JwtService);
    login(emailOrUsername: string, password: string): Promise<AuthEntity>;
}
