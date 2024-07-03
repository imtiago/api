import { IUser } from '../models/user';

export interface IUserDatabase {
    findById: (id: string) => Promise<IUser | null>;
}
