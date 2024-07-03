import { FindAllMovieUseCase } from '../../../../useCases/movie/FindAllMovie';
import { movieDatabase } from '../../../databases/prisma/movie';

export const makeFindAllMovieFactory = () => {
    const database = movieDatabase;
    // @ts-ignore
    return FindAllMovieUseCase(database);
};
