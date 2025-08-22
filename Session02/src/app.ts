// Type Annotation  :   // khai báo kiểu dữ liệu cho biến, hàm, tham số, trả về

let num : number = 42;
num = 100;

const sum = (a:number,b: number) : number => a+b;

// Type Inference : tự động suy luận kiểu dữ liệu 
let name : string = "Nguyen Van A";

// Kiểu dữ liệu nâng cao 
let a : any ;
a = 10;
a = "Hello";
a = true;
a = [1, 2, 3];

const printStr =(str : string ) : never=>{
    while(true){
        console.log(str);
    }
} 
//Enum
enum Sex {
    Male, Female , Other
}

let sex: Sex =  Sex.Female; 
// LiteralType 
let status: number | string ;

console.log("name",name);

let arr: number[] = [1,2,3];
console.log( typeof arr);


let param: number | string = "10";
if (typeof param === "string") {
    let x : number|unknown = param as number | unknown;
}

 // tham so cho cho kiểu dữ liệu 

 

