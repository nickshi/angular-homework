import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth-service.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl("", Validators.email),
    password: new FormControl("", Validators.minLength(2)),
    });

  constructor(private _router: Router, private _authService: AuthService, private _http: HttpClient) {
    gtag('event', 'event_view_')
  }

  ngOnInit() {
  }

  onSubmit() {
    // let body = {
    //   first_name: 'Junhua',
    //   last_name: 'last_name',
    //   email: 'shijh@gmail.com',
    //   password: '1233444'
    // }
    // this._http.post('http://localhost:8000/EventBrite/default/user/register', body)
    // .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log("Error occured", err);
    //     }
    //   );
    this._authService.login(this.form.get('email').value, this.form.get('password').value)
    .subscribe( user => {
      console.log(user);
      if(user != null) {
        this._router.navigate(['/']);
      }
    });
  }

  cancel() {
    console.log("goto home page");
    this._router.navigate(['/']);
  }
}
