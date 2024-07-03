import { FindMovieByIdUseCase } from '../../../../useCases/movie/FindMovieById';
import { movieDatabase } from '../../../databases/prisma/movie';

export const makeFindMovieByIdFactory = () => {
    const database = movieDatabase;
    // @ts-ignore
    return FindMovieByIdUseCase(database);
};
