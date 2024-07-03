import { IValidate } from '../../infra/factories/validates/interface';
import { FastifyRequest, FastifyReply } from 'fastify';

export const CreateRentController = (validateSchema: IValidate, makeFindMovie: any, makeRent: any) => {
    const controller = async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            console.log('Controller - CreateRentController');
            const { movieId, qnt, ...resultValidate } = await validateSchema.validate(req.body);
            const movie = await makeFindMovie(movieId);
            if (!movie) return reply.code(404).send('movieId not exist');
            if (movie.available < qnt) return reply.code(409).send('qnt not available');
            const rent = await makeRent({ movie, qnt, ...resultValidate });
            return reply.code(201).send(rent);
        } catch (error) {
            console.error(error);
            return 'Erro ao enviar a mensagem\n';
        }
    };
    return controller;
};
