import { Service } from '@angular/core';

@Service()
export class MembersService {
    private members:Member[]=[
        {id:1,fullname:'Xosrow Parviz',password:'sasan'},
        {id:2,fullname:'Vishtasp Achy',password:'Haxa'},
        {id:3,fullname:'Xosrow Anoushirvan',password:'adel'},
    ];
    add(members:Member){
        this.members.push(members);
    }
    list(){
        return[...this.members];
    }
    remove(id:number){
        this.members=this.members.filter(u=>u.id!=id);
    }
    update(members:Member){
        const key=this.members.find(u=>u.id==members.id);
        if (key){
            key.fullname=members.fullname;
            key.password=members.password;
        }
    }
}

export interface Member{
    id:number;
    fullname:string;
    password:string;
}
