import { FindUserByIdUseCase } from '../../../../useCases/user/FindUserById';
import { userDatabase } from '../../../databases/prisma/user';

export const makeFindUserByIdFactory = () => {
    const database = userDatabase;
    // @ts-ignore
    return FindUserByIdUseCase(database);
};
