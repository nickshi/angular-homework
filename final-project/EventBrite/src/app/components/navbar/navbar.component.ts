import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import {
  Router,
} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    console.log(this._authService.currentUser());
  }

  logout() {
    this._authService.logout().subscribe(res => {
       this._router.navigate(['/']);
    })
  }

}
