import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  NavigationEnd
} from '@angular/router';
declare let gtag: Function;

import { SignUpForm } from '../../viewmodels/sign-up-form.model';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})

export class SignUpPageComponent implements OnInit {
  formData: SignUpForm = new SignUpForm("", "", "");
 
  form = new FormGroup({
    userName: new FormControl("", Validators.required),
    email: new FormControl(this.formData.email, Validators.email),
    password: new FormControl(this.formData.password, Validators.minLength(2)),
    repassword: new FormControl(this.formData.repassword, Validators.minLength(2))
    },
    this.passwordMatchValidator);
  constructor(private _router: Router, private _authService: AuthService) {
    gtag('event', 'event_view_sign_up_page');
  }

  ngOnInit() {
   
  }

  onSubmit() {
    console.log(this.form);
    this._authService.register(this.form.get('userName').value,this.form.get('email').value, this.form.get('password').value)
    .subscribe( user => {
      console.log(user);
      if(user != null) {
        this._router.navigate(['/']);
      }
    });
  }

  cancel() {
    this._router.navigate(['/']);
  }

  passwordMatchValidator(g: FormGroup) {
   return g.get('password').value === g.get('repassword').value
       ? null : {mismatch: true};
  }
}
