import { FastifyRequest, FastifyReply } from 'fastify';

export const FindUserByIdController = (makeFindUserById: any) => {
    const controller = async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            console.log('Controllher - users');
            // @ts-ignore
            const id = req.params.id;
            const user = await makeFindUserById(id);
            return reply.code(200).send(user);
        } catch (error) {
            console.error(error);
            return 'Erro ao enviar a mensagem\n';
        }
    };
    return controller;
};
