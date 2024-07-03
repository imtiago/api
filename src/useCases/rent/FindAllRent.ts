import { IRentDatabase } from '../../domain/databases/IRentDatabase';

export const FindAllRentUseCase = (database: IRentDatabase) => {
    // @ts-ignore
    const useCase = async () => {
        console.log('use-case - FindAllRent');
        const renteds = await database.findAll();
        return renteds;
    };
    return useCase;
};
