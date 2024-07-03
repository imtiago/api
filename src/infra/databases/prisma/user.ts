import { prisma } from '.';
import { IUserDatabase } from '../../../domain/databases/IUserDatabase';
import { userLogged } from '../../../mook/user';
import { userMapper } from './mappers/userMapper';

export const userDatabase: IUserDatabase = {
    findById: async (id: string) => {
        const user = userLogged;
        return user ? userMapper.toDomain(user) : null;
    },
};
