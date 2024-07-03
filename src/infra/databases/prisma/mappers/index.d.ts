export interface IDefaultMapper<domainType, databaseType> {
    toDomain: (data: databaseType) => domainType
    toPersistence: (data: domainType) => databaseType
}