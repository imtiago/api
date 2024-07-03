import { uuid } from 'uuidv4';
import { IMovie } from './movie';

export interface ICreateRentDTO {
    id?: string;
    initialDate: Date;
    endDate: Date;
    qnt: number;
    movie?: IMovie;
    status: string;
}
export interface IRent {
    id: string;
    initialDate: Date;
    endDate: Date;
    qnt: number;
    status: string;
    movie?: IMovie;
}

export const createModelRent = ({ id, endDate, initialDate, qnt, movie, status }: ICreateRentDTO): IRent => {
    return {
        id: id || uuid(),
        endDate,
        initialDate,
        qnt,
        status,
        movie,
    };
};
