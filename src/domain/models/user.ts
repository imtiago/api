import { uuid } from 'uuidv4';

export interface IUser {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active: boolean;
}
interface ICreateUserDTO {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active?: boolean;
}

export const createModelUser = ({ id, email, firstName, lastName, password, active }: ICreateUserDTO): IUser => {
    return {
        id: id || uuid(),
        email,
        fullName: firstName + ' ' + lastName,
        firstName,
        lastName,
        password,
        active: active || true,
    };
};
