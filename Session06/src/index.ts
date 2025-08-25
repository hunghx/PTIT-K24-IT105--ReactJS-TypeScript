 // Abstract Class - Lớp trừu tượng là một lớp có chưa phương thức trừu tượng .

abstract class Student{
    id : number;
    name : string;
    age : number;
    constructor(id:number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    
    abstract move(): void; // Phương thức trừu tượng không có thân hàm
    
    showInfo(): string {
        return `ID: ${this.id} - Name: ${this.name} - Age: ${this.age}`;
    }
 }

 class StudentIT extends Student{
    constructor(id:number, name:string, age:number){
        super(id, name, age);
    }
    move (): void {
        console.log("Student IT is moving");
    }
    makeSound(): void {
        console.log("Student IT is making sound");
    }
 }


 const student : StudentIT = new StudentIT(1, "Nguyen Van A", 20);
 student.makeSound();

 // Interface - API của một lớp - chứa các phương thức trừu tượng

 interface IStudent{
    id : number;
    name : string;
    age : number;
    move(): void; // Phương thức trừu tượng không có thân hàm
    makeSound(): void; // Phương thức trừu tượng không có thân hàm
    showInfo(): string; // Phương thức trừu tượng không có thân hàm
}

class StudentEN implements IStudent{
    constructor(public id:number, public name:string, public age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move(): void {
        console.log("Student EN is moving");
    }
    makeSound(): void {
        console.log("Student EN is making sound");
    }
    showInfo(): string {
        return `ID: ${this.id} - Name: ${this.name} - Age: ${this.age}`;
    }
}





