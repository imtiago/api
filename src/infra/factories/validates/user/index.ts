import { object, string, number, date, InferType, ref } from 'yup';
import { IValidate } from '../interface';

const createUserSchema = object({
    firstName: string()
        .required('fisrtName é Obrigatório')
        .transform((value) => {
            return value !== null ? value.toLowerCase() : value;
        }),
    lastName: string()
        .required('lastName é Obrigatório')
        .transform((value) => {
            return value !== null ? value.toLowerCase() : value;
        }),
    email: string().email('formato inválido').required('email é Obrigatório'),
    password: string().min(8, 'A senha precisa ter no minimo 8 caracteres').required('senha é Obrigatório'),
    confirmPassword: string().when('password', (password, field) =>
        password ? field.required('Confirmação de senha obrigatório').oneOf([ref('password')]) : field
    ),
});

export type ICreateUser = InferType<typeof createUserSchema>;
