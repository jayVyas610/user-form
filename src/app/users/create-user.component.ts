import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userService } from './user.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { Input } from '@angular/core';
import { ListUsersComponent } from './list-users.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  user : User;
  index: number;
  updateMode= false;
  
  constructor(private _saveUsers : userService, private _router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params['id']) {
      this.updateMode = true;
      this.index = +this.activatedRoute.snapshot.params['id'];
      this.user = this._saveUsers.getUserById(this.index);
    }
    else {
      this.user = {fName: null, lName: null, email: null, phNum: null, isActive: null, avatarPath: 'assets/images/user.png'}
    }
    // console.log(this.activatedRoute.snapshot);
  }

  saveUser(): void {
    //console.log(userform);
    if(this.updateMode){
      this._saveUsers.updateUsers(this.index, this.user);
    } else {
      this._saveUsers.saveUsers(this.user);
    }
    this._router.navigate(['list']);
  }


  


}
