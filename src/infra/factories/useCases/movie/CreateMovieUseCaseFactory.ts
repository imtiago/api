import { CreateMovieUseCase } from '../../../../useCases/movie/CreateMovie';
import { movieDatabase } from '../../../databases/prisma/movie';

export const makeCreateMovieFactory = () => {
    const database = movieDatabase;
    return CreateMovieUseCase(database);
};
