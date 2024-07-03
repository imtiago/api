import { object, string, number, date, InferType, ref } from 'yup';
import { IValidate } from '../interface';

const createRentSchema = object({
    movieId: string().required('movieId é Obrigatório').uuid('movieId é uuid'),
    initialDate: date().required('initialDate é Obrigatório'),
    endDate: date().required('endDate é Obrigatório'),
    qnt: number().required('qnt é Obrigatório').min(0),
});

export type ICreateRent = InferType<typeof createRentSchema>;

export const createRentValidate: IValidate = {
    validate: async (data: any) => {
        const resposeValidate = await createRentSchema.validate(data, {
            stripUnknown: true,
        });
        return resposeValidate;
    },
};
