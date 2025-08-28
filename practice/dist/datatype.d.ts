export declare class Reader {
    static nextId: number;
    id: number;
    name: string;
    email: string;
    phone: string;
    constructor(name: string, email: string, phone: string);
    getDetails(): string;
}
export declare abstract class Book {
    static nextId: number;
    id: number;
    title: string;
    author: string;
    genre: string;
    isAvailable: boolean;
    constructor(title: string, author: string, genre: string);
    borrowBook(): void;
    returnBook(): void;
    abstract getBookInfo(): string;
    showInfo(): void;
}
export declare class LiteratureBook extends Book {
    getBookInfo(): string;
    showInfo(): void;
}
export declare class ScienceBook extends Book {
    getBookInfo(): string;
    showInfo(): void;
}
export declare class BorrowRecord {
    static nextId: number;
    recordId: number;
    reader: Reader;
    book: Book;
    borrowDate: Date;
    returnDate: Date;
    constructor(reader: Reader, book: Book, borrowDate: Date, returnDate: Date);
    getDetails(): string;
}
export declare class Library {
    books: Book[];
    readers: Reader[];
    borrowRecords: BorrowRecord[];
    constructor();
    addBook(book: Book): void;
    addReader(name: string, email: string, phone: string): Reader;
    borrowBook(readerId: number, bookId: number, borrowDate: Date, returnDate: Date): BorrowRecord | null;
    returnBook(recordId: number): void;
    listAvailableBooks(): void;
    listReaderBorrowings(readerId: number): void;
    calculateTotalBorrowings(): number;
    getBookGenreCount(): void;
    findBookById(collection: Book[], id: number): Book | undefined;
    findReaderById(collection: Reader[], id: number): Reader | undefined;
    findBorrowRecordById(collection: BorrowRecord[], id: number): BorrowRecord | undefined;
}
//# sourceMappingURL=datatype.d.ts.map