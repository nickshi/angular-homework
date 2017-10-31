import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
@Injectable()
export class AuthService {
  _users: User[] = [];

  constructor() {
    this._users.push(
      new User('nick', '1234'),
      new User('jim', '4321')
    );
  }

  login(username: string, password: string): boolean {
    return this._users.filter(u => u.userName == username && u.password == password).length > 0;
  }
}