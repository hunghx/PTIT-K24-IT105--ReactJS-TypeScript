import { Student } from "./model.js";
export class StudentManager {
    constructor() {
        this.students = [];
        this.students.push(new Student(1, "John Doe", "123 Main St", "123-456-7890", "john@gmail.com"));
        this.students.push(new Student(2, "David Doe", "123 Main St", "123-456-7890", "john@gmail.com"));
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }
    updateStudent(id, updatedStudent) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students[index] = updatedStudent;
        }
        else {
            console.log(`Student with ID ${id} not found.`);
        }
    }
    listStudents() {
        if (this.students.length === 0) {
            console.log("No students available.");
            return;
        }
        this.students.forEach(student => {
            student.displayData();
        });
    }
    getById(id) {
        return this.students.find(student => student.id === id);
    }
}
//# sourceMappingURL=student-manager.js.map