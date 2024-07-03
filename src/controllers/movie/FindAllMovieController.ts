import { FastifyRequest, FastifyReply } from 'fastify';

export const FindAllMovieController = (makeFindAllMovie: any) => {
    // export const CreateUserController = () => {
    const controller = async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            console.log('Controller - FindAllMovieController');
            const movies = await makeFindAllMovie();
            return reply.code(200).send(movies);
        } catch (error) {
            console.error(error);
            return 'Erro ao enviar a mensagem\n';
        }
    };
    return controller;
};
