import { IMovieDatabase } from '../../domain/databases/IMovieDatabase';
import { createModelMovie } from '../../domain/models/movie';

export const CreateMovieUseCase = (database: IMovieDatabase) => {
    // @ts-ignore
    const useCase = async (data: any) => {
        console.log('use-case - CreateMovie');
        const movie = createModelMovie(data);
        const movieCreated = await database.create(movie);
        return movieCreated;
    };
    return useCase;
};
