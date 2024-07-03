import { FastifyInstance } from 'fastify';
import { CreateMovieControllerFactory } from '../../../factories/controllers/movie/CreateMovieControllerFactory';
import { FindAllMovieControllerFactory } from '../../../factories/controllers/movie/FindAllMovieControllerFactory';

async function movieRoutes(fastify: FastifyInstance, options: Object) {
    fastify.post('/v1/movies', CreateMovieControllerFactory()).get('/v1/movies', FindAllMovieControllerFactory());
}

export default movieRoutes;
