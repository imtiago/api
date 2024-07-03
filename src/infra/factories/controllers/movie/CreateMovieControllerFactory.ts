import { CreateMovieController } from '../../../../controllers/movie/CreateMovieController';
import { makeCreateMovieFactory } from '../../useCases/movie/CreateMovieUseCaseFactory';
import { createMovieValidate } from '../../validates/movie';

export const CreateMovieControllerFactory = () => {
    const validateCreateMovie = createMovieValidate;
    const makeMovie = makeCreateMovieFactory();
    return CreateMovieController(validateCreateMovie, makeMovie);
};
