import { FindUserByIdController } from "../../../../controllers/user/FindUserByIdController";
import { makeFindUserByIdFactory } from "../../useCases/user/FindUserByIdUseCaseFactory";

export const FindUserByIdControllerFactory = () => {
    const makeFindUserById = makeFindUserByIdFactory();
    return FindUserByIdController(makeFindUserById)
}
