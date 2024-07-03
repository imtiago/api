import { uuid } from 'uuidv4';
import { IRent } from './rent';

export interface ICreateMovieDTO {
    id?: string;
    description: string;
    title: string;
    numberOfCopies: number;
    category: string;
    rentals: IRent[];
}
export interface IMovie {
    id: string;
    description: string;
    title: string;
    available: number;
    renteds: number;
    numberOfCopies: number;
    category: string;
}

export const createModelMovie = ({
    id,
    title,
    description,
    numberOfCopies,
    category,
    rentals,
}: ICreateMovieDTO): IMovie => {
    const rentalsOpen = rentals ? rentals.filter((rent) => rent.status === 'OPEN') : [];
    let renteds = 0;
    rentalsOpen.forEach((rent) => (renteds += rent.qnt));
    return {
        id: id || uuid(),
        title,
        description,
        numberOfCopies,
        category,
        renteds,
        available: numberOfCopies - renteds,
    };
};
