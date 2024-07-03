import bcrypt from 'bcrypt';
const saltRounds = 10;

export const generateBase64 = (data: string): string => {
    return btoa(data);
};

export const decodeBase64 = (data: string): string => {
    return atob(data);
};

export const hashValue = (value: string) => bcrypt.hashSync(value, saltRounds);

export const compareHashedValue = (hash: string, value: string) => bcrypt.compareSync(value, hash);
