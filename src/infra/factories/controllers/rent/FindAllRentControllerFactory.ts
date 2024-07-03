import { FindAllRentController } from '../../../../controllers/rent/FindAllRentController';
import { makeFindAllRentFactory } from '../../useCases/rent/FindAllRentUseCaseFactory';

export const FindAllRentControllerFactory = () => {
    const makeFindAllRent = makeFindAllRentFactory();
    return FindAllRentController(makeFindAllRent);
};
