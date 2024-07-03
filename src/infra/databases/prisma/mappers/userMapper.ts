import { IDefaultMapper } from '.';
import { IUser, createModelUser } from '../../../../domain/models/user';

export const userMapper: IDefaultMapper<IUser, IUser> = {
    toDomain: ({ email, firstName, id, lastName, password, active }) => {
        const modelUser = createModelUser({ email, firstName, lastName, password, id, active });
        return modelUser;
    },
    toPersistence: ({ id, email, firstName, lastName, password, active }: IUser): IUser => {
        return {
            id,
            email,
            password,
            firstName,
            lastName,
            fullName: firstName + lastName,
            active,
        };
    },
};
