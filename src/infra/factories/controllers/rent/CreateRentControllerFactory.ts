import { CreateRentController } from '../../../../controllers/rent/CreateRentController';
import { makeFindMovieByIdFactory } from '../../useCases/movie/FindMovieByIdUseCaseFactory';
import { makeCreateRentFactory } from '../../useCases/rent/CreateRentUseCaseFactory';
import { createRentValidate } from '../../validates/rent';

export const CreateRentControllerFactory = () => {
    const validateCreateRent = createRentValidate;
    const makeFindMovie = makeFindMovieByIdFactory();
    const makeRent = makeCreateRentFactory();
    return CreateRentController(validateCreateRent, makeFindMovie, makeRent);
};
