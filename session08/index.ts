// Array

let arr : Array<number> = [1,2,3,4,5];

interface User {
    id: number,
    name: string
    age: number
}
class Student implements User{
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}



class Array<T extends User>{
    data : T[] = [];
    constructor(...args: T[]){
        this.data = args;
    }

    push(item : T){
        this.data.push(item);
    }
}



// let arr2 : Array<number> = new Array<number>(1,2,3,4,5);
let arr2  : Array<Student> = new Array<User>(
    {id: 1, name: 'Nguyen Van A', age: 20});


interface GenericCRUD<T> {
    data : T[],
    add(item: T) : void,
    get(index: number) : T,
    update(index: number, item: T) : void,
    delete(index: number) : void
}



// class UserManager implements GenericCRUD<User>{
//     data: User[] = [];
//     add(item: User): void {
//         this.data.push(item);
//     }
//     get(index: number): User {
//         return new User();
//     }
//     update(index: number, item: User): void {
        
//     }
//     delete(index: number): void {
        
//     }
// }


// Constraint : ràng buộc : qui tắc 


// extends : mở rộng và super :  