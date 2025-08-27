export interface GenericCrud<T, ID>{
    getAll(): T[];
    getById(id : ID): T | undefined;
    create(item: T): void;
    update(id: ID, item: T): void;
    delete(id: ID): void;
}


