import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
declare const require: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private title = 'EA Min1';
  private img = require('../../assets/img/EA-logo.png');

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  test() {
    this.userService.test$().subscribe(
      (data) => console.log(data));
  }

  /*
  signIn() {
    this.userService.signIn$().subscribe(
      (data) => console.log(data));
  }*/

}
