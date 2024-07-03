import { FastifyRequest, FastifyReply } from 'fastify';

export const LogoutController = () => {
    const controller = async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            console.log('Controller - LogoutController');

            return reply.code(200).send();
        } catch (error) {
            console.error(error);
            return 'Erro ao enviar a mensagem\n';
        }
    };
    return controller;
};
