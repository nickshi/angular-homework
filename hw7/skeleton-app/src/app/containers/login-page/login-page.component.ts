import { Component, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log("login");
    this._router.navigate(['/chatbox']);
  }

  forgotPassword() {
    console.log("forgotPassword")
  
  }
}
