import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Input } from '@angular/core'
import { userService } from './user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  @Input() user: User;
  constructor(private _userList: userService) { }

  ngOnInit() {
  }

  
}
