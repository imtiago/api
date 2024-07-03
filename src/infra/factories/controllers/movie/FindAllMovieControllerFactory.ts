import { FindAllMovieController } from '../../../../controllers/movie/FindAllMovieController';
import { makeFindAllMovieFactory } from '../../useCases/movie/FindAllMovieUseCaseFactory';

export const FindAllMovieControllerFactory = () => {
    const makeFindAllMovie = makeFindAllMovieFactory();
    return FindAllMovieController(makeFindAllMovie);
};
