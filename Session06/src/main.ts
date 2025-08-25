import { data, Student } from "./data.js";

let tbody = document.getElementById("student-table-body") as HTMLElement;
let students: Student[] = data;


// Tạo lớp StudentManager để quản lý danh sách sinh viên
class StudentManager {
    displayStudents(): void {
        // hiển thị danh sách sinh viên trong thẻ <tbody>
        let html = "";
        students.forEach(stu => {
            html += `
            <tr>
                            <td><span class="student-id">${stu.id}</span></td>
                            <td>${stu.name}</td>
                            <td>${stu.dob}</td>
                            <td><span class="gender-badge gender-male">${stu.sex ? 'Nam' : 'Nữ'}</span></td>
                            <td>${stu.address}</td>
                            <td class="actions">
                                <button class="btn btn-sm btn-edit">Sửa</button>
                                <button class="btn btn-sm btn-delete">Xóa</button>
                            </td>
                        </tr>`;
        })

        tbody.innerHTML = html;

    }

    searchStudents(key: string): void {
        let html = "";
        students.filter((stu) => stu.name.toLowerCase().includes(key.toLowerCase())).forEach(stu => {
            html += `
            <tr>
                            <td><span class="student-id">${stu.id}</span></td>
                            <td>${stu.name}</td>
                            <td>${stu.dob}</td>
                            <td><span class="gender-badge gender-male">${stu.sex ? 'Nam' : 'Nữ'}</span></td>
                            <td>${stu.address}</td>
                            <td class="actions">
                                <button class="btn btn-sm btn-edit">Sửa</button>
                                <button class="btn btn-sm btn-delete">Xóa</button>
                            </td>
                        </tr>`;
        })

        tbody.innerHTML = html;
    }

    deleteStudent(id: number): void {
        students = students.filter(stu => stu.id !== id);
        this.displayStudents();
    }


    updateStudent() {
        // Cập nhật thông tin sinh viên
        let updateStu: Student = { id: 20231001, name: "Nguyễn Văn An", dob: "2005", address: "123 Lê Lợi", sex: true }; // đã lấy từ ô input
        students = students.map(stu => stu.id === updateStu.id ? ({ ...stu, ...updateStu }) : stu); // spread operator
        this.displayStudents();
    }
}

let studentManager = new StudentManager();
document.body.onload = studentManager.displayStudents() as unknown as () => void;

document.getElementById("search")?.addEventListener("change", function (e: Event) {
    const input = e.target as HTMLInputElement;
    studentManager.searchStudents(input.value)
})