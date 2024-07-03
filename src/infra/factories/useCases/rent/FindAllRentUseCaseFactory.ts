import { FindAllRentUseCase } from '../../../../useCases/rent/FindAllRent';
import { rentDatabase } from '../../../databases/prisma/rent';

export const makeFindAllRentFactory = () => {
    const database = rentDatabase;
    // @ts-ignore
    return FindAllRentUseCase(database);
};
