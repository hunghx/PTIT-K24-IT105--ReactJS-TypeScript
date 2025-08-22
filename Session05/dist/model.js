export class Student {
    constructor(id, nameIn, address = "", phone = "", email = "") {
        this.id = id;
        this.name = nameIn;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    inputData() {
        // sử dụng prompt để nhập dữ liệu
    }
    displayData() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Address: ${this.address}, Phone: ${this.phone}, Email: ${this.email}`);
    }
}
//# sourceMappingURL=model.js.map