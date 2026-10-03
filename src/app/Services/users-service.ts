import { Service } from '@angular/core';

@Service()
export class UsersService {
    private users:User[]=[
        {id:1,fullname:'Admin',username:'admin',password:'admin',role:'admin'},
        {id:2,fullname:'Mahmood Mahmood',username:'Mahy',password:'Mahy',role:'librarian'},
        {id:3,fullname:'darius achy',username:'achy',password:'achy',role:'librarian'},
    ];
    login(username:string,password:string){
        const user=this.users.find(u=>u.username==username && u.password==password);
        if (user){
            return user;
        }
        return undefined;
    }
    logout(){

    }
    add(user:User){
        this.users.push(user);
    }
    list(){
        return [...this.users];
    }
    update(user:User){
        const key=this.users.find(u=>u.id==user.id);
        if (key){
            key.fullname=user.fullname;
            key.username=user.username;
            key.role=user.role;
        }
    }
    remove(id:number){
        this.users=this.users.filter(u=>u.id!=id);
    }
}

export interface User{
    id:number;
    fullname:string;
    username:string;
    password:string;
    role:string;
}