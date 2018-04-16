import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = 'http://localhost:3000/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getusers$() {
    return this.http.get<Array<User>>(url + '/user/all');
  }

  test$(){
    return this.http.get(url + '/test');
  }

  /*
  signIn$(user) {
    return this.http.post(url + '/test', )
  }*/
}
