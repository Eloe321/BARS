import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
export declare const roundsOfHashing = 10;
export declare class UserService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createUserDto: CreateUserDto): Promise<{
        username: string;
        email: string;
        password: string;
        id: string;
        createAt: Date;
        updateAt: Date;
    }>;
    findAll(): Promise<{
        username: string;
        email: string;
        password: string;
        id: string;
        createAt: Date;
        updateAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        username: string;
        email: string;
        password: string;
        id: string;
        createAt: Date;
        updateAt: Date;
    } | null>;
    findUserByUsername(username: string): Promise<{
        username: string;
        email: string;
        password: string;
        id: string;
        createAt: Date;
        updateAt: Date;
    } | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        username: string;
        email: string;
        password: string;
        id: string;
        createAt: Date;
        updateAt: Date;
    }>;
    remove(id: string): Promise<{
        username: string;
        email: string;
        password: string;
        id: string;
        createAt: Date;
        updateAt: Date;
    }>;
}
