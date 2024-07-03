import { IDefaultMapper } from '.';
import { Prisma } from '@prisma/client';
import { IRent, createModelRent } from '../../../../domain/models/rent';
import { movieMapper } from './movieMapper';

export const rentWithMovieMapper: IDefaultMapper<IRent, Prisma.RentCreateInput> = {
    toDomain: ({ id, endDate, initialDate, movie, qnt, status }) => {
        // @ts-ignore
        const movieToDomain = movieMapper.toDomain(movie);
        const modelRent = createModelRent({
            id,
            endDate: new Date(endDate),
            initialDate: new Date(initialDate),
            qnt,
            status,
            movie: movieToDomain,
        });
        return modelRent;
    },
    toPersistence: ({ id, endDate, initialDate, qnt, movie }: IRent): Prisma.RentCreateInput => {
        return {
            id,
            endDate,
            initialDate,
            // @ts-ignore
            movie,
            qnt,
        };
    },
};
