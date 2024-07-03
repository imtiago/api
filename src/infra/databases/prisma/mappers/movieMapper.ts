import { IDefaultMapper } from '.';
import { IMovie, createModelMovie } from '../../../../domain/models/movie';
import { Prisma } from '@prisma/client';
import { rentMapper } from './rentMapper';

export const movieMapper: IDefaultMapper<IMovie, Prisma.MovieCreateInput> = {
    toDomain: ({ id, title, description, category, numberOfCopies, rentals }) => {
        // @ts-ignore
        const rentalsToDomain = rentals.map((rent) => rentMapper.toDomain(rent));
        const modelMovie = createModelMovie({
            id,
            category,
            description,
            numberOfCopies,
            title,
            rentals: rentalsToDomain,
        });
        return modelMovie;
    },
    toPersistence: ({ id, category, description, numberOfCopies, title }: IMovie): Prisma.MovieCreateInput => {
        return {
            id,
            category,
            description,
            numberOfCopies,
            title,
        };
    },
};
