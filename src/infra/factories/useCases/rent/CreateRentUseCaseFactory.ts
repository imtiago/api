import { CreateRentUseCase } from '../../../../useCases/rent/CreateRent';
import { rentDatabase } from '../../../databases/prisma/rent';

export const makeCreateRentFactory = () => {
    const database = rentDatabase;
    return CreateRentUseCase(database);
};
