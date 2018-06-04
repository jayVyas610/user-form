import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class userService {

    updateUserChanged = new Subject<User>();
    

    private listUser: User[]  = [
        {
          fName: "John",
          lName: "Doe",
          email: "johndoe@abc.com",
          phNum: 1234567890,
          isActive: true,
          avatarPath: 'assets/images/user.png'
        },
        {
          fName: "Jane",
          lName: "Doe",
          email: "janedoe@abc.com",
          phNum: 9876543210,
          isActive: false,
          avatarPath: 'assets/images/user.png'
        }
      ];

    
    getUsers(): User[] {
        return this.listUser;
    }

    saveUsers(user: User) {
        this.listUser.push(user);
    }

    getUserById(id: number) {
        return this.listUser[id];
    }

    deleteUsers(user: User) {
        var index = this.listUser.indexOf(user);
        this.listUser.splice(index, 1);
    }

    updateUsers(id: number, user: User){
        this.listUser[id] = user;
    }

}