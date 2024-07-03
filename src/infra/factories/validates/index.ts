import { object, string, number, date, InferType, ref } from 'yup';
import { IValidate } from './interface';

const idSchema = object({
    id: string().required('id is required'),
});

export type IIdSchema = InferType<typeof idSchema>;


export const idValidate: IValidate = {
    validate: async (data: any): Promise<IIdSchema> => {
        const resposeValidate = await idSchema.validate(data, {
            stripUnknown: true,
        })
        return resposeValidate
    }
}

