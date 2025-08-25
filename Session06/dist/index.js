// Abstract Class - Lớp trừu tượng là một lớp có chưa phương thức trừu tượng .
class Student {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    showInfo() {
        return `ID: ${this.id} - Name: ${this.name} - Age: ${this.age}`;
    }
}
class StudentIT extends Student {
    constructor(id, name, age) {
        super(id, name, age);
    }
    move() {
        console.log("Student IT is moving");
    }
    makeSound() {
        console.log("Student IT is making sound");
    }
}
const student = new StudentIT(1, "Nguyen Van A", 20);
student.makeSound();
class StudentEN {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        console.log("Student EN is moving");
    }
    makeSound() {
        console.log("Student EN is making sound");
    }
    showInfo() {
        return `ID: ${this.id} - Name: ${this.name} - Age: ${this.age}`;
    }
}
export {};
//# sourceMappingURL=index.js.map