import { IMovieDatabase } from '../../domain/databases/IMovieDatabase';

export const FindMovieByIdUseCase = (database: IMovieDatabase) => {
    // @ts-ignore
    const useCase = async (id: string) => {
        console.log('use-case - FindMovieById');
        const movie = await database.findById(id);
        return movie;
    };
    return useCase;
};
