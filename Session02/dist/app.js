// Type Annotation  :   // khai báo kiểu dữ liệu cho biến, hàm, tham số, trả về
let num = 42;
num = 100;
const sum = (a, b) => a + b;
// Type Inference : tự động suy luận kiểu dữ liệu 
let name = "Nguyen Van A";
// Kiểu dữ liệu nâng cao 
let a;
a = 10;
a = "Hello";
a = true;
a = [1, 2, 3];
const printStr = (str) => {
    while (true) {
        console.log(str);
    }
};
//Enum
var Sex;
(function (Sex) {
    Sex[Sex["Male"] = 0] = "Male";
    Sex[Sex["Female"] = 1] = "Female";
    Sex[Sex["Other"] = 2] = "Other";
})(Sex || (Sex = {}));
let sex = Sex.Female;
// LiteralType 
let status;
console.log("name", name);
let arr = [1, 2, 3];
console.log(typeof arr);
let param = "10";
if (typeof param === "string") {
    let x = param;
}
export {};
// tham so cho cho kiểu dữ liệu 
//# sourceMappingURL=app.js.map