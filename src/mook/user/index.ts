import { IUser, createModelUser } from '../../domain/models/user';

export const userLogged: IUser = createModelUser({
    email: 'system@system.com',
    firstName: 'system',
    lastName: '',
    // password: 'system123',
    password: '$2b$10$Z/0Nn8o4q5QKU73Y6Cl2feA5vKI2qnKCV8D0mzBPMZOzVfXHALxh.',
});
