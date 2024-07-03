import fastify from 'fastify';
import cors from '@fastify/cors';
import { Server } from 'socket.io';
import fastifyIO from 'fastify-socket.io';
import userRoutes from './src/infra/server/http/routes/userRoutes';
import movieRoutes from './src/infra/server/http/routes/movieRoutes';
import authenticationRoutes from './src/infra/server/http/routes/authenticationRoutes';
import rentRoutes from './src/infra/server/http/routes/rentRoutes';

export const server = fastify();
server.register(cors, {
    // put your options here
    origin: '*',
    // origin: 'http://localhost:5173',
    // allowedHeaders: '*',
    // methods: '*'
});

server.register(fastifyIO, {
    cors: {
        // origin: "http://localhost:5173",
        origin: '*',

        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    },
});

server.register(authenticationRoutes);
server.register(userRoutes);
server.register(movieRoutes);
server.register(rentRoutes);

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

declare module 'fastify' {
    interface FastifyInstance {
        io: Server<{ hello: string }>;
    }
}
