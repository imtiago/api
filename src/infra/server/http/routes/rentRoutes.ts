import { FastifyInstance } from 'fastify';
import { CreateRentControllerFactory } from '../../../factories/controllers/rent/CreateRentControllerFactory';
import { FindAllRentControllerFactory } from '../../../factories/controllers/rent/FindAllRentControllerFactory';

async function rentRoutes(fastify: FastifyInstance, options: Object) {
    fastify.post('/v1/renteds', CreateRentControllerFactory()).get('/v1/renteds', FindAllRentControllerFactory());
}

export default rentRoutes;
