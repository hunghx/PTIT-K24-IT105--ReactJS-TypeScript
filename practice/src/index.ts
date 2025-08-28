import { Book, Library, LiteratureBook } from "./datatype.js";

class Menu {
    run(): void {
        const library = new Library();
        while(true){
            this.showMenu();
            // nhập lựa chọn
            const choice = Number(prompt("Nhập lựa chọn của bạn"));
            switch(choice) {
                case 1:
                    {
                    let name = prompt("Nhập tên độc giả")|| "";
                    let email = prompt("Nhập email")||"";
                    let phone = prompt("Nhập phone")|| "";
                    library.addReader(name,email,phone);
                    alert("Thêm độc giả thành công")
                    }
                    break;
                case 2:{
                    let title = prompt("Nhập tên sách")|| "";
                    let author = prompt("Nhập tác giả")||"";
                    let genre = prompt("Nhập thể loại")|| "";
                    console.log(`
                        Chọn loại sách : 
                        1. LiteratureBook
                        2. ScienceBook
                        3. ComicBook
                        `)
                    let choose = Number(prompt("chọn loại sách theo số"))
                    let newBook ;
                    switch(choose){
                        case 1:
                            newBook = new LiteratureBook(title,author,genre);
                            break;
                        case 2:
                            newBook = new LiteratureBook(title,author,genre);
                            break;
                        case 3:
                            newBook = new LiteratureBook(title,author,genre);
                            break;
                    }
                    if(newBook){
                        library.addBook(newBook);
                        console.log("Thêm sách thành công");
                    }else{
                    console.log(("thêm sách thất bại"));
                    }
                    
                    
                }
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    // hiển thị sách
                    library.listAvailableBooks();
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:
                    break;
                case 9:
                    break;
                case 10:
                    break;
                case 11:
                    break;
                default :
                    console.error("Lựa chọn ko hợp lệ");
            }
        }
    }

    showMenu(): void {
        console.log(`1. Thêm độc giả mới
                     2. Thêm sách mới (lựa chọn loại: LiteratureBook, ScienceBook, ComicBook)
                     3. Cho độc giả mượn sách
                     4. Trả sách
                     5. Hiển thị danh sách sách đang có sẵn
                     6. Hiển thị các sách đang mượn của một độc giả
                     7. Tính tổng số sách đã được mượn
                     8. Đếm số lượng sách theo thể loại
                     9. Tìm kiếm và hiển thị thông tin theo mã định danh (generic)
                     10. Hiển thị mô tả ngắn gọn của sách theo thể loại
                     11. Thoát chương trình`);
    }
}

const menu = new Menu();
menu.run();