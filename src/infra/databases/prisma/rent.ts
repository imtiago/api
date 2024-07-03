import { prisma } from '.';
import { IRentDatabase } from '../../../domain/databases/IRentDatabase';
import { rentMapper } from './mappers/rentMapper';
import { rentWithMovieMapper } from './mappers/rentWithMovieMapper';

export const rentDatabase: IRentDatabase = {
    create: async (data) => {
        const dataToPersiste = rentMapper.toPersistence(data);
        await prisma.rent.create({ data: dataToPersiste });
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
        const dataRenteds = await prisma.rent.findMany({
            include: {
                movie: {
                    include: {
                        rentals: true,
                    },
                },
            },
        });
        // @ts-ignore
        const responseData = dataRenteds.map((dataRent) => rentWithMovieMapper.toDomain(dataRent));
        return responseData;
    },
    findById: async (id: string) => {
        const rent = await prisma.rent.findFirst({
            where: {
                id,
            },
            include: {
                movie: true,
            },
        });
        // @ts-ignore
        return rent ? rentMapper.toDomain(rent) : null;
    },
};
