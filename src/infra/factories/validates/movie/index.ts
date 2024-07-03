import { object, string, number, date, InferType, ref } from 'yup';
import { IValidate } from '../interface';

const createMovieSchema = object({
    title: string()
        .required('title é Obrigatório')
        .transform((value) => {
            return value !== null ? value.toLowerCase() : value;
        }),
    description: string()
        .required('description é Obrigatório')
        .transform((value) => {
            return value !== null ? value.toLowerCase() : value;
        }),
    category: string()
        .required('category é Obrigatório')
        .transform((value) => {
            return value !== null ? value.toLowerCase() : value;
        }),
    numberOfCopies: number().required('numberOfCopies é Obrigatório').min(0),
});

export type ICreateMovie = InferType<typeof createMovieSchema>;

export const createMovieValidate: IValidate = {
    validate: async (data: any) => {
        const resposeValidate = await createMovieSchema.validate(data, {
            stripUnknown: true,
        });
        return resposeValidate;
    },
};
