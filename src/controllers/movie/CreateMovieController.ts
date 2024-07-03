import { IValidate } from '../../infra/factories/validates/interface';
import { FastifyRequest, FastifyReply } from 'fastify';

export const CreateMovieController = (validateSchema: IValidate, makeMovie: any) => {
    const controller = async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            console.log('Controller - CreateMovieController');
            const resultValidate = await validateSchema.validate(req.body);
            const movie = await makeMovie(resultValidate);
            return reply.code(201).send(movie);
        } catch (error) {
            console.error(error);
            return 'Erro ao enviar a mensagem\n';
        }
    };
    return controller;
};
