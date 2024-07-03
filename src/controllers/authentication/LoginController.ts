import { IValidate } from '../../infra/factories/validates/interface';
import { compareHashedValue, decodeBase64, hashValue } from '../../utils';
import { FastifyRequest, FastifyReply } from 'fastify';

// export const LoginController = (validateSchema: IValidate, findClientById: any, findObjectsOfClientByOwnerId: any, makeCall: any) => {
export const LoginController = (findUserByIdentifier: any) => {
    // export const CreateUserController = () => {
    const controller = async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            console.log('Controller - LoginController');
            const authorization = req.headers.authorization;
            if (!authorization) return reply.code(401).send();

            const [, token] = authorization.split(' ') || ['', ''];
            if (!token) return reply.code(401).send('Access denied! No token provided');
            const stringUserData = decodeBase64(token);
            const [identifier, password] = stringUserData.split(':');

            const user = await findUserByIdentifier(identifier);
            if (!user) return reply.code(401).send();

            const isValid = compareHashedValue(user.password, password);
            if (!isValid) return reply.code(401).send();

            return reply.code(200).send(user);
        } catch (error) {
            console.error(error);
            return 'Erro ao enviar a mensagem\n';
        }
    };
    return controller;
};
