import { FastifyInstance } from 'fastify';
import { LoginControllerFactory } from '../../../factories/controllers/authentication/LoginControllerFactory';
import { LogoutControllerFactory } from '../../../factories/controllers/authentication/LogoutControllerFactory';

async function authenticationRoutes(fastify: FastifyInstance, options: Object) {
    fastify
        .get('/v1/authentication/authenticate', LoginControllerFactory())
        .get('/v1/authentication/logout', LogoutControllerFactory());
}

export default authenticationRoutes;
