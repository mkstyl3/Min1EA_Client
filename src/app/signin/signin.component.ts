import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UserService} from '../service/user.service';
import {ToastsManager} from 'ng2-toastr';
import {HttpClient} from '@angular/common/http';

const url = 'http://localhost:3000/user';
declare const require: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]
})
export class SigninComponent implements OnInit {
  private title = 'EA Min1';
  private img = require('../../assets/img/EA-logo.png');

  constructor(private userService: UserService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccessToast(m: string) {
    this.toastr.success(m);
  }

  showErrorToast(m: string) {
    this.toastr.error(m);
  }

  ngOnInit() {
  }

  test() { // Working
    this.userService.test$().subscribe(
      (data) => {
        this.showSuccessToast('Test passed!');
      });
  }

  signIn(username: string, password: string) {
    this.userService.signIn$(username, password).subscribe(
      data => {
        if (data.responseId == 1) {
          console.log(data.user);
          this.showSuccessToast(data.response);
        }

        else if (data.responseId == 2) {
          console.log(data.user);
          this.showSuccessToast(data.response);
        }

        else {
          console.log(data.responseId == -1 || data.responseId == -2);
          this.showErrorToast(data.response);
        }
      },
      data => {
        console.log(data.responseId == -3);
        this.showErrorToast(data.response);
      });
  };
}
