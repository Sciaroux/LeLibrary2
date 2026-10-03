import { Service } from '@angular/core';
// import { Book, BooksService } from './books-service';
// import { Member } from './members-service';

@Service()
export class BorrowsService {
    private borrows:Borrow[]=[
        {id:1,book:'Shahnameh',member:'Xosrow Parviz'},
        {id:2,book:'Golestan',member:'Vishtasp Achy'},
        {id:3,book:'Masnavi Manavi',member:'Xosrow Anoushirvan'},
    ];
    add(Borrow:Borrow){
            this.borrows.push(Borrow);
        }
        list(){
            return [...this.borrows];
        }
        update(Borrow:Borrow){
            const key=this.borrows.find(u=>u.id==Borrow.id);
            if (key){
                key.book=Borrow.book;
                key.member=Borrow.member;
            }
        }
        remove(id:number){
            this.borrows=this.borrows.filter(u=>u.id!=id);
        }
}

export interface Borrow{
    id:number;
    // book:Book;
    // member:Member;    Nashod...
    book:string;
    member:string;
}