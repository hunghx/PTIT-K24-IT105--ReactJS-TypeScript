// Quản lý danh sách độc giả:
// Lớp Reader có các thuộc tính:
// id: mã định danh độc giả (số nguyên, tự động tăng).
// name: tên độc giả (chuỗi).
// email: email (chuỗi).
// phone: số điện thoại (chuỗi).
// Phương thức:
// getDetails(): trả về thông tin độc giả dưới dạng chuỗi.
export class Reader {
    static nextId = 1;
    id;
    name;
    email;
    phone;
    constructor(name, email, phone) {
        this.id = Reader.nextId++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
// Quản lý danh sách sách:
// Lớp trừu tượng Book có các thuộc tính:
// id: mã sách (số nguyên, tự động tăng).
// title: tựa đề sách (chuỗi).
// author: tác giả (chuỗi).
// genre: thể loại sách (chuỗi), ví dụ: "Văn học", "Khoa học", "Truyện tranh".
// isAvailable: trạng thái sách sẵn có để mượn (boolean).
// Phương thức:
// borrowBook(): đổi trạng thái isAvailable thành false.
// returnBook(): đổi trạng thái isAvailable thành true.
// getBookInfo(): string: (abstract) mô tả ngắn gọn nội dung sách.
export class Book {
    static nextId = 1;
    id;
    title;
    author;
    genre;
    isAvailable;
    constructor(title, author, genre) {
        this.id = Book.nextId++;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isAvailable = true;
    }
    borrowBook() {
        this.isAvailable = false;
    }
    returnBook() {
        this.isAvailable = true;
    }
    showInfo() {
        console.log(`ID : ${this.id} - Title : ${this.title}`);
    }
}
// Lớp con của Book:
// LiteratureBook: mô tả "Sách thuộc thể loại văn học, tác phẩm văn học cổ điển và hiện đại".
// ScienceBook: mô tả "Sách chuyên ngành khoa học, công nghệ và nghiên cứu".
// ComicBook: mô tả "Sách truyện tranh, hình ảnh minh họa sinh động".
export class LiteratureBook extends Book {
    getBookInfo() {
        return `Sách thuộc thể loại văn học, tác phẩm văn học cổ điển và hiện đại`;
    }
    showInfo() {
        super.showInfo();
    }
}
export class ScienceBook extends Book {
    getBookInfo() {
        return `Sách chuyên ngành khoa học, công nghệ và nghiên cứu`;
    }
    showInfo() {
        super.showInfo();
    }
}
class ComicBook extends Book {
    getBookInfo() {
        return `Sách truyện tranh, hình ảnh minh họa sinh động`;
    }
    showInfo() {
        super.showInfo();
    }
}
// Quản lý mượn sách:
// Lớp BorrowRecord gồm các thuộc tính:
// recordId: mã mượn sách (số nguyên, tự động tăng).
// reader: độc giả mượn sách (kiểu Reader).
// book: sách được mượn (kiểu Book).
// borrowDate: ngày mượn (kiểu Date).
// returnDate: ngày trả dự kiến (kiểu Date).
// Phương thức:
// getDetails(): trả về thông tin mượn sách dưới dạng chuỗi.
export class BorrowRecord {
    static nextId = 1;
    recordId;
    reader;
    book;
    borrowDate;
    returnDate;
    constructor(reader, book, borrowDate, returnDate) {
        this.recordId = BorrowRecord.nextId++;
        this.reader = reader;
        this.book = book;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate;
    }
    getDetails() {
        return `Record ID: ${this.recordId}, Reader: ${this.reader.name}, Book: ${this.book.title}, Borrow Date: ${this.borrowDate.toDateString()}, Return Date: ${this.returnDate.toDateString()}`;
    }
}
// Quản lý thư viện (lớp Library):
// Thuộc tính:
// Danh sách sách (books: Book[]).
// Danh sách độc giả (readers: Reader[]).
// Danh sách mượn sách (borrowRecords: BorrowRecord[]).
// Phương thức:
// addBook(book: Book): void: thêm sách mới.
// addReader(name: string, email: string, phone: string): Reader: thêm độc giả mới.
// borrowBook(readerId: number, bookId: number, borrowDate: Date, returnDate: Date): BorrowRecord | null: cho độc giả mượn sách; trả về đối tượng BorrowRecord nếu thành công, trả về null nếu không tìm thấy độc giả hoặc sách không có sẵn.
// returnBook(recordId: number): void: trả sách theo mã mượn.
// listAvailableBooks(): void: hiển thị danh sách sách đang sẵn có để mượn.
// listReaderBorrowings(readerId: number): void: hiển thị danh sách sách đang mượn của độc giả.
// calculateTotalBorrowings(): number: tính tổng sách đã được mượn.
// getBookGenreCount(): void: đếm số sách theo từng thể loại.
// Các hàm tìm kiếm:
// findBookById(collection: Book[], id: number): Book | undefined
// findReaderById(collection: Reader[], id: number): Reader | undefined
// findBorrowRecordById(collection: BorrowRecord[], id: number): BorrowRecord | undefined
export class Library {
    books;
    readers;
    borrowRecords;
    constructor() {
        this.books = [
            new LiteratureBook("abc", "xyz", "mnh"),
            new LiteratureBook("def", "xyz", "mnh")
        ];
        this.readers = [];
        this.borrowRecords = [];
    }
    addBook(book) {
        console.log(`${book.id} - ${book.title}`);
        this.books.push(book);
    }
    addReader(name, email, phone) {
        const newReader = new Reader(name, email, phone);
        this.readers.push(newReader);
        return newReader;
    }
    borrowBook(readerId, bookId, borrowDate, returnDate) {
        const reader = this.findReaderById(this.readers, readerId);
        const book = this.findBookById(this.books, bookId);
        if (reader && book && book.isAvailable) {
            // cho mươn
            const newRecord = new BorrowRecord(reader, book, borrowDate, returnDate);
            return newRecord;
        }
        return null;
    }
    returnBook(recordId) {
        // lấy ra record
        const record = this.findBorrowRecordById(this.borrowRecords, recordId);
        if (record) {
            const book = record.book;
            book.returnBook();
            record.returnDate = new Date(); // cập nhật ngày trả
        }
    }
    listAvailableBooks() {
        this.books.forEach(b => b.showInfo()); // array method để lọc và in ra
    }
    listReaderBorrowings(readerId) {
        this.borrowRecords.filter(br => br.reader.id === readerId && !br.book.isAvailable).map(br => br.book)
            .forEach(b => console.log(b.getBookInfo()));
    }
    calculateTotalBorrowings() {
        return this.borrowRecords.length;
    }
    getBookGenreCount() {
        const map = new Map();
        this.books.forEach(b => {
            if (map.has(b.genre)) { // đã tồn tại thể loại
                let old = map.get(b.genre); // số lượng cũ
                map.set(b.genre, old + 1);
            }
            else {
                map.set(b.genre, 1);
            }
        });
        map.forEach(entry => {
            console.log(`Genre : ${entry}`);
        });
    }
    findBookById(collection, id) {
        return collection.find(b => b.id === id);
    }
    findReaderById(collection, id) {
        return collection.find(r => r.id === id);
    }
    findBorrowRecordById(collection, id) {
        return collection.find(br => br.recordId === id);
    }
}
//# sourceMappingURL=datatype.js.map