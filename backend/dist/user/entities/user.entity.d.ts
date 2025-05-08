import { User } from 'generated/prisma';
export declare class UserEntity implements User {
    constructor(partial: Partial<UserEntity>);
    id: string;
    createAt: Date;
    updateAt: Date;
    username: string;
    email: string;
    password: string;
}
