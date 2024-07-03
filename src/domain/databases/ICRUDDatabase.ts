export interface ICRUDDatabase<T> {
    create: (data: T) => Promise<T>
    delete: (id: string) => Promise<boolean>
    findById: (id: string) => Promise<T | null>
    findAll: () => Promise<T[]>
}