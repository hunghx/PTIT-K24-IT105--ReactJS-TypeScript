export class Student{
    id : number;
    name: string;
    address: string;
    phone: string;
    email: string;
    constructor(id: number, nameIn: string, address: string = "", phone: string = "", email: string = "") {
        this.id = id;
        this.name = nameIn;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    inputData():void{
        // sử dụng prompt để nhập dữ liệu
    }
    displayData():void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Address: ${this.address}, Phone: ${this.phone}, Email: ${this.email}`);
    }
}
