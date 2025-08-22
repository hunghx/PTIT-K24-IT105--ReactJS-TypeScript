import { Student } from "./model.js";
export declare class StudentManager {
    students: Student[];
    constructor();
    addStudent(student: Student): void;
    removeStudent(id: number): void;
    updateStudent(id: number, updatedStudent: Student): void;
    listStudents(): void;
    getById(id: number): Student | undefined;
}
//# sourceMappingURL=student-manager.d.ts.map