import { IRentDatabase } from '../../domain/databases/IRentDatabase';
import { createModelRent } from '../../domain/models/rent';

export const CreateRentUseCase = (database: IRentDatabase) => {
    // @ts-ignore
    const useCase = async (data: any) => {
        console.log('use-case - CreateRent');
        const rent = createModelRent({ ...data, status: 'OPEN' });
        const rentCreated = await database.create(rent);
        return rentCreated;
    };
    return useCase;
};
