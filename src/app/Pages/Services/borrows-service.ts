import { Service } from '@angular/core';
import { Book, BooksService } from './books-service';
import { Member } from './members-service';

@Service()
export class BorrowsService {
    private borrows: Borrow[] = [
        {
            id: 1, book: {
                id: 1, name: 'Shahnameh', writer: 'Ferdowsi'
            }, member: {
                id: 1, fullname: 'Xosrow Parviz', password: 'sasan'
            }, borrowDate: new Date(2026, 10, 2),
        },
        {
            id: 2, book: {
                id: 2, name: 'Golestan', writer: 'Saadi'
            }, member: {
                id: 2, fullname: 'Vishtasp Achy', password: 'Haxa'
            }, borrowDate: new Date(2026, 10, 2),
        },
        {
            id: 3, book: {
                id: 4, name: 'Masnavi Manavi', writer: 'Molana'
            }, member: {
                id: 3, fullname: 'Xosrow Anoushirvan', password: 'adel'
            }, borrowDate: new Date(2026, 10, 2),
        },
    ];
    add(Borrow: Borrow) {
        this.borrows.push(Borrow);
    }
    list() {
        return [...this.borrows];
    }
    update(Borrow: Borrow) {
        const key = this.borrows.find(u => u.id == Borrow.id);
        if (key) {
            key.book = Borrow.book;
            key.member = Borrow.member;
        }
    }
    remove(id: number) {
        this.borrows = this.borrows.filter(u => u.id != id);
    }
}

export interface Borrow {
    id: number;
    book: Book;
    member: Member;
    borrowDate: Date;
    returnDate?: Date;
}