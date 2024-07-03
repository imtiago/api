import { prisma } from '.';
import { IMovieDatabase } from '../../../domain/databases/IMovieDatabase';
import { movieMapper } from './mappers/movieMapper';

export const movieDatabase: IMovieDatabase = {
    create: async (data) => {
        const dataToPersiste = movieMapper.toPersistence(data);
        await prisma.movie.create({ data: dataToPersiste });
        return data;
    },
    delete: async (id) => {
        await prisma.movie.delete({
            where: {
                id,
            },
        });
        return true;
    },
    findAll: async () => {
        const dataMovies = await prisma.movie.findMany({
            include: {
                rentals: true,
            },
        });
        // @ts-ignore
        const responseData = dataMovies.map((dataMovie) => movieMapper.toDomain(dataMovie));
        return responseData;
    },
    findById: async (id: string) => {
        const movie = await prisma.movie.findFirst({
            where: {
                id,
            },
            include: {
                rentals: true,
            },
        });
        // @ts-ignore
        return movie ? movieMapper.toDomain(movie) : null;
    },
};
