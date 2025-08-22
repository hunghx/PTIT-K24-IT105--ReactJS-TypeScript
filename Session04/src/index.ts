let arr1 : Array<Array<string>>; // Array of arrays of strings
let arr2 : (string | number)[][]; // Another way to declare an array of arrays of strings


let obj = {
    id : 1,
    name : "John",
}

type Student = { id: number, name: string } ; // alias for an object type with id and name properties
let obj2 : Student ; 

class Person{
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

let per : Person;


interface IStudent {
    id: number;
    name: string;
    per?: Person
}


const student: IStudent = {
    id: 1,
    name: "Jane"
}


// alias for 

type Name = "Nguyen Van A"|"Nguyen Van B";

let str : Name ;

str = "Nguyen Van B";

class Teacher extends Person{
    subject: string;

    constructor(id: number, name: string, subject: string) {
        super(id, name);
        this.subject = subject;
    }
}


let p1 = new Person(1, "John Doe");
let p2 : Person = new Teacher(2, "Jane Doe", "Math");


p2 instanceof Teacher; // true


"name" in p2; // true, because p2 has a name property inherited from Person

type Girl= {
    voice : string;
    makeUp : ()=> void
}

type Boy = {
    voice : string;
    playSport : ()=> void
}

function isGirl(obj : Girl |Boy) : obj is Girl { // tư dịnh nghia kiểm tra kiểu type guard
    return (obj as Girl).makeUp  !== undefined ;
}

let a : Boy = {
    voice: "Hello",
    playSport: () => {
        console.log("Playing sport");
    }
}
console.log("is Girl: ", isGirl(a)); // false

