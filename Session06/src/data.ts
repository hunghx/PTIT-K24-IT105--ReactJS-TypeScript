import { GenericCrud } from "./struct.js";

export type Student ={
    id : number;
    name : string;
    dob : string;
    sex : boolean;
    address : string;
}

export const data: Student[] =  [
  {
    id: 20231001,
    name: "Nguyễn Văn An",
    dob: "2005-03-15",
    sex: true, // true = Nam, false = Nữ
    address: "123 Lê Lợi, Quận 1, TP.HCM"
  },
  {
    id: 20231002,
    name: "Trần Thị Bình",
    dob: "2005-07-22",
    sex: false,
    address: "456 Nguyễn Huệ, Quận 1, TP.HCM"
  },
  {
    id: 20231003,
    name: "Lê Minh Cường",
    dob: "2004-11-10",
    sex: true,
    address: "789 Hai Bà Trưng, Quận 3, TP.HCM"
  },
  {
    id: 20231004,
    name: "Phạm Thị Diễm",
    dob: "2005-09-05",
    sex: false,
    address: "321 Võ Thị Sáu, Quận 3, TP.HCM"
  },
  {
    id: 20231005,
    name: "Hoàng Văn Em",
    dob: "2004-12-18",
    sex: true,
    address: "654 Pasteur, Quận 1, TP.HCM"
  },
  {
    id: 20231006,
    name: "Vũ Thị Fương",
    dob: "2005-01-30",
    sex: false,
    address: "987 Cách Mạng Tháng Tám, Quận Tân Bình, TP.HCM"
  },
  {
    id: 20231007,
    name: "Đặng Văn Giang",
    dob: "2004-08-14",
    sex: true,
    address: "147 Điện Biên Phủ, Quận Bình Thạnh, TP.HCM"
  },
  {
    id: 20231008,
    name: "Ngô Thị Hồng",
    dob: "2005-04-25",
    sex: false,
    address: "258 Lý Tự Trọng, Quận 1, TP.HCM"
  }];


  export class StudentManager implements GenericCrud<Student,number>{
    private students: Student[] = [...data];

    getAll(): Student[] {
        return this.students;
    }
    getById(id: number): Student | undefined {
        return this.students.find(stu => stu.id === id);
    }
    create(item: Student): void {
        this.students.push(item);
    }
    update(id: number, item: Student): void {
        this.students = this.students.map(stu => stu.id === id ? ({ ...stu, ...item }) : stu);
    }
    delete(id: number): void {
        this.students = this.students.filter(stu => stu.id !== id);
    }
  }


  interface Comment{
    id: string;
    userId: number;
    content: string;
  }

  class CommentManager implements GenericCrud<Comment, string>{
    private comments: Comment[] = [];

    getAll(): Comment[] {
        return this.comments;
    }
    getById(id: string): Comment | undefined {
        return this.comments.find(cmt => cmt.id === id);
    }
    create(item: Comment): void {
        this.comments.push(item);
    }
    update(id: string, item: Comment): void {
        this.comments = this.comments.map(cmt => cmt.id === id ? ({ ...cmt, ...item }) : cmt);
    }
    delete(id: string): void {
        this.comments = this.comments.filter(cmt => cmt.id !== id);
    }
  }


  // Component<T, U, V> 
  // tiêu chuẩn thiết kế : SOLID 