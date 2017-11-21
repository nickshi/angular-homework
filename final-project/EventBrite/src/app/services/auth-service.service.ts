import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/RX';

@Injectable()
export class AuthService {
  _stUserId: number = 2;
  _users: User[] = [];
  _currentUser: User;
  isLoggedIn: boolean;
  redirectUrl:string;
  constructor() {
    let user = new User("nick","shijh302@gmail.com", "1234");
    user.userID = 1;
    user.createEvents = [1,2,3,4,5,6];
    user.joinEvents = [1,2];
    this._users.push(user);
    this._currentUser = null;
  }

  login(username: String, password: String) : Observable<User> {
    let users = this._users.filter(u => u.userEmail == username && u.password == password);
    if (users.length > 0) {
      this._currentUser = users[0];
      this.isLoggedIn = true;
      return Observable.of(users[0]).delay(0);
    } else {
      return Observable.of(null).delay(0);
    }
  }

  register(userName: String, userEmail: String, password: String): Observable<User>{

    let newUser = new User(userName, userEmail, password);
    newUser.userID = this._stUserId++;
    this._users.push(newUser);
    this._currentUser = newUser;
    this.isLoggedIn = true;
    return Observable.of(newUser).delay(0);
  }

  logout() : Observable<User> {
    this._currentUser = null;
    this.isLoggedIn = false;
    return Observable.of(null).delay(0);
  }
  
  currentUser(): User {
    return this._currentUser;
  }
}