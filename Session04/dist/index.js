let arr1; // Array of arrays of strings
let arr2; // Another way to declare an array of arrays of strings
let obj = {
    id: 1,
    name: "John",
};
let obj2;
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let per;
const student = {
    id: 1,
    name: "Jane"
};
let str;
str = "Nguyen Van B";
class Teacher extends Person {
    subject;
    constructor(id, name, subject) {
        super(id, name);
        this.subject = subject;
    }
}
let p1 = new Person(1, "John Doe");
let p2 = new Teacher(2, "Jane Doe", "Math");
p2 instanceof Teacher; // true
"name" in p2; // true, because p2 has a name property inherited from Person
function isGirl(obj) {
    return obj.makeUp !== undefined;
}
let a = {
    voice: "Hello",
    playSport: () => {
        console.log("Playing sport");
    }
};
console.log("is Girl: ", isGirl(a)); // false
export {};
//# sourceMappingURL=index.js.map