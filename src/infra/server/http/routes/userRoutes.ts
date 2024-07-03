import { FastifyInstance } from 'fastify';
import { FindUserByIdControllerFactory } from '../../../factories/controllers/user/FindUserByIdControllerFactory';

async function userRoutes(fastify: FastifyInstance, options: Object) {
    fastify.get('/v1/users/myAccount', FindUserByIdControllerFactory());
}

export default userRoutes;
