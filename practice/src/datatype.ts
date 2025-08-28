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
    id: number;
    name: string;
    email: string;
    phone: string;
    constructor( name: string, email: string, phone: string) {
        this.id = Reader.nextId++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails(): string {
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
export abstract class Book {
    static nextId = 1;
    id: number;
    title: string;
    author: string;
    genre: string;
    isAvailable: boolean;
    constructor(title: string, author: string, genre: string) {
        this.id = Book.nextId++;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isAvailable = true;
    }
    borrowBook(): void {
        this.isAvailable = false;
    }
    returnBook(): void {
        this.isAvailable = true;
    }
    abstract getBookInfo(): string;
    showInfo():void {
        console.log(`ID : ${this.id} - Title : ${this.title}`);
    }

}

// Lớp con của Book:
// LiteratureBook: mô tả "Sách thuộc thể loại văn học, tác phẩm văn học cổ điển và hiện đại".
// ScienceBook: mô tả "Sách chuyên ngành khoa học, công nghệ và nghiên cứu".
// ComicBook: mô tả "Sách truyện tranh, hình ảnh minh họa sinh động".

export class LiteratureBook extends Book {
    getBookInfo(): string {
        return `Sách thuộc thể loại văn học, tác phẩm văn học cổ điển và hiện đại`;
    }
    showInfo(): void {
        super.showInfo();
    }
}
export class ScienceBook extends Book {
    getBookInfo(): string {
        return `Sách chuyên ngành khoa học, công nghệ và nghiên cứu`;
    }
     showInfo(): void {
        super.showInfo();
    }
}
class ComicBook extends Book {
    getBookInfo(): string {
        return `Sách truyện tranh, hình ảnh minh họa sinh động`;
    }
     showInfo(): void {
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
    recordId: number;
    reader: Reader;
    book: Book;
    borrowDate: Date;
    returnDate: Date;
    constructor(reader: Reader, book: Book, borrowDate: Date, returnDate: Date) {
        this.recordId = BorrowRecord.nextId++;
        this.reader = reader;
        this.book = book;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate;
    }
    getDetails(): string {
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
    books: Book[];
    readers: Reader[];
    borrowRecords: BorrowRecord[];
    constructor() {
        this.books = [
            new LiteratureBook("abc","xyz","mnh"),
            new LiteratureBook("def","xyz","mnh")
        ];
        this.readers = [];
        this.borrowRecords = [];
    }
    addBook(book: Book): void {
        console.log(`${book.id} - ${book.title}`);
        
        this.books.push(book);
    }
    addReader(name: string, email: string, phone: string): Reader {
        const newReader = new Reader(name, email, phone);
        this.readers.push(newReader);
        return newReader;
    }
    borrowBook(readerId: number, bookId: number, borrowDate: Date, returnDate: Date): BorrowRecord | null {
        const reader = this.findReaderById(this.readers, readerId);
        const book = this.findBookById(this.books, bookId);
        if(reader && book && book.isAvailable){
            // cho mươn
            const newRecord = new BorrowRecord(reader, book, borrowDate, returnDate);
            return newRecord;
        }
        return null;
    }
    returnBook(recordId: number): void {
        // lấy ra record
        const record = this.findBorrowRecordById(this.borrowRecords, recordId);
        if(record){
            const book = record.book;
            book.returnBook();
            record.returnDate = new Date(); // cập nhật ngày trả
        }
    }
    listAvailableBooks(): void {
       this.books.forEach(b=> b.showInfo()); // array method để lọc và in ra
    }
    listReaderBorrowings(readerId: number): void { // in ra các sách đang mượn của độc giả
        this.borrowRecords.filter(br => br.reader.id === readerId && !br.book.isAvailable).map(br=> br.book)
        .forEach(b => console.log(b.getBookInfo()));
    }
    calculateTotalBorrowings(): number { // tính tổng sách đã được mượn
        return this.borrowRecords.length;
    }
    getBookGenreCount(): void { // đếm sách theo từng thể loại
        const map : Map<string, number> = new Map();
        this.books.forEach(b=>{
            if(map.has(b.genre)){ // đã tồn tại thể loại
                let old = map.get(b.genre) as number // số lượng cũ
                map.set(b.genre, old+1);
            }else{
                map.set(b.genre, 1);
            }
        })
        map.forEach(entry =>{
            console.log(`Genre : ${entry}`)
        })
    }
    findBookById(collection: Book[],id: number): Book | undefined {
        return collection.find(b => b.id === id);
    }
    findReaderById(collection: Reader[],id: number): Reader | undefined {
        return collection.find(r => r.id === id);
    }
    findBorrowRecordById(collection: BorrowRecord[],id: number): BorrowRecord | undefined {
        return collection.find(br => br.recordId === id);
    }
}

