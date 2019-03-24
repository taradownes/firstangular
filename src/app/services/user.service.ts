import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable  } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any> 

  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Smith",
        age: 30,
        email: "John@gmail.com",
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: "Catherine",
        lastName: "Jackson",
        age: 24,
        email: "Catherine@gmail.com",
        isActive: false,
        registered: new Date('04/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: "Elena",
        lastName: "Downes",
        email: "elena@gmail.com",
        isActive: true,
        registered: new Date('08/02/2019 08:30:00'),
        hide: true
      }
    ];

   }

   getData(){
     this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000);
       setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);

     });
     return this.data;
   }
getUsers(): Observable<User[]>{
  return of(this.users);
}
addUser(user:User) {
  this.users.unshift(user);
}

}
