import { IDefaultMapper } from '.';
import { Prisma } from '@prisma/client';
import { IRent, createModelRent } from '../../../../domain/models/rent';

export const rentMapper: IDefaultMapper<IRent, Prisma.RentCreateInput> = {
    toDomain: ({ id, endDate, initialDate, qnt, status }) => {
        const modelRent = createModelRent({
            id,
            endDate: new Date(endDate),
            initialDate: new Date(initialDate),
            qnt,
            status,
        });
        return modelRent;
    },
    toPersistence: ({ id, endDate, initialDate, qnt, movie, status }: IRent): Prisma.RentCreateInput => {
        return {
            id,
            endDate,
            initialDate,
            // @ts-ignore
            movieId: movie?.id,
            qnt,
            status,
        };
    },
};
