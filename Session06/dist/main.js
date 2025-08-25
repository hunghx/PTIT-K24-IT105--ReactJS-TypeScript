import { data } from "./data.js";
let tbody = document.getElementById("student-table-body");
let students = data;
// Tạo lớp StudentManager để quản lý danh sách sinh viên
class StudentManager {
    displayStudents() {
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
        });
        tbody.innerHTML = html;
    }
    searchStudents(key) {
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
        });
        tbody.innerHTML = html;
    }
}
let studentManager = new StudentManager();
document.body.onload = studentManager.displayStudents();
document.getElementById("search")?.addEventListener("change", function (e) {
    const input = e.target;
    studentManager.searchStudents(input.value);
});
//# sourceMappingURL=main.js.map