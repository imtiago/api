import { IUserDatabase } from '../../domain/databases/IUserDatabase';

export const FindUserByIdUseCase = (database: IUserDatabase) => {
    // @ts-ignore
    const useCase = async (id: string) => {
        console.log('use-case - FindUserById');
        const user = await database.findById(id);
        return user;
    };
    return useCase;
};
