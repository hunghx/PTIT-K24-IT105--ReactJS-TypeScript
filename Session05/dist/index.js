import { StudentManager } from "./student-manager.js";
// let a : number = 5;
// console.log(`The value of a is: ${a}`);
// // khai báo class 
// class Student{
//     // id va name
//      id: number;
//      name: string;
//     // consstructor
//     constructor(id: number, nameIn: string) {
//         this.id = id;
//         this.name = nameIn;
//     }
//     public sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
//     // public API (phuuong thuc get set)
//     public setName(name: string){
//         this.name = name;
//     }
//     public setId(id: number){
//         this.id = id;
//     }
//     public getName(): string {
//         return this.name;
//     }
//     public getId(): number {
//         return this.id;
//     }
//     showInfo(): void {
//         console.log(`ID: ${this.id}, Name: ${this.name}`);
//     }
// }
// let  s : Student = new Student(1, "John Doe");
// // console.log(`Student ID: ${s.id}, Name: ${s.name}`);
// class SubStudent extends Student {
//     private address: string;
//     // constructor
//     constructor(id: number, name: string, address: string ) {
//         super(id, name);
//         this.address = address;
//     }
//     public sayHello() {
//         // this.id = 1;
//         console.log(`Hello, my name is ${this.name} and I am a sub student`);
//     }
//     showInfo(): void {
//         super.showInfo(); // gọi phương thức showInfo của lớp cha
//         console.log(`Address: ${this.address}`);
//     }
// }
// let student: Student = new Student(2, "Jane Doe");
// // Overriding (đa hình tại thời điểm run time) / Overloading (đa hình tại thời điểm biên dich / compile time)
// let s1 : Student = new SubStudent(3, "Alice", "123 Main St");
// // s.sayHello(); // Gọi phương thức sayHello của lớp con
// s1.showInfo(); // Gọi phương thức showInfo của lớp con
// tạo chương trình
// tạo menu
const studentManager = new StudentManager();
while (true) {
    console.log("-------------------Menu-----------------");
    console.log("1. Hiển thi danh sách");
    console.log("2. Thêm mới");
    console.log("3. Cập nhật");
    console.log("4. Xóa");
    console.log("5. Thoát");
    console.log("------------------------------------------");
    let choice = parseInt(window.prompt("Nhập lựa chọn của bạn: ") || "5");
    switch (choice) {
        case 1:
            studentManager.listStudents();
            break;
        default:
            break;
    }
    if (choice === 5) {
        console.log("Cảm ơn bạn đã sử dụng chương trình!");
        break;
    }
}
//# sourceMappingURL=index.js.mapx`