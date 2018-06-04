import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { userService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];

  constructor(private _userServ: userService, private _router: Router) {}

  ngOnInit() {
    this.users = this._userServ.getUsers();
  }

  delete(user){
    this._userServ.deleteUsers(user);
  }

  update(index: number){
    //var index = this.users.indexOf(user);
    this._router.navigate([index + '/update']);
 

  }
}
