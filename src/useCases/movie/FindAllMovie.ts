import { IMovieDatabase } from '../../domain/databases/IMovieDatabase';

export const FindAllMovieUseCase = (database: IMovieDatabase) => {
    // @ts-ignore
    const useCase = async () => {
        console.log('use-case - FindAllMovie');
        const movies = await database.findAll();
        return movies;
    };
    return useCase;
};
