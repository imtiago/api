import { FastifyRequest, FastifyReply } from 'fastify';

export const FindAllRentController = (makeFindAllRent: any) => {
    // export const CreateUserController = () => {
    const controller = async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            console.log('Controller - FindAllRentController');
            const renteds = await makeFindAllRent();
            return reply.code(200).send(renteds);
        } catch (error) {
            console.error(error);
            return 'Erro ao enviar a mensagem\n';
        }
    };
    return controller;
};
