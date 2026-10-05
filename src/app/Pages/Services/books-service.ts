import { Service } from '@angular/core';

@Service()
export class BooksService {
    private books:Book[]=[
        {id:1,name:'Shahnameh',writer:'Ferdowsi'},
        {id:2,name:'Golestan',writer:'Saadi'},
        {id:3,name:'Bustan',writer:'Saadi'},
        {id:4,name:'Masnavi Manavi',writer:'Molana'},
        {id:5,name:'Robaiat',writer:'Xayam'},
    ];
    add(book:Book){
       this.books.push(book);
    }
    list(){
        return [...this.books];
    }
    remove(id:number){
        this.books=this.books.filter(u=>u.id!=u.id);
    }
    update(book:Book){
        const key=this.books.find(u=>u.id==book.id)
        if (key){
            key.name=book.name;
            key.writer=book.writer;
        }
    }
}

export interface Book{
    id:number;
    name:string;
    writer:string;
}