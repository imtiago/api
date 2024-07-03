import { LoginController } from '../../../../controllers/authentication/LoginController';
import { makeFindUserByIdFactory } from '../../useCases/user/FindUserByIdUseCaseFactory';

export const LoginControllerFactory = () => {
    const findUserById = makeFindUserByIdFactory();
    return LoginController(findUserById);
};
