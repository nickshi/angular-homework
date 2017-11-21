import { Component, OnInit, Input } from '@angular/core';
import { User } from "../../models/user.model";
import { Event } from "../../models/event.model";
import { AuthService } from '../../services/auth-service.service';
import { EventService } from '../../services/event-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  NavigationEnd
} from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  user: User;
  // createEvents: Event[] = [];
  // joinEvents: Event[] = []; 

  userName:String = "test";
  password:String;
  form = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.minLength(2)),
    });

  constructor(private _authService: AuthService, private _eventService: EventService) { }

  ngOnInit() {
    this.user = this._authService.currentUser();
    //this.getEvents();
    this.userName = this.user.userName;
    gtag('event', 'event_view_profile_page');
  }

  onSubmit() {
    this.user.userName = this.userName;
  }
  // getEvents() {
  //   gtag('event', 'event_get_profile_events');
  //   this.createEvents = this.user.createEvents.map(eid => this._eventService.getEventByEventIDNoMock(eid));
  //   this.joinEvents = this.user.joinEvents.map(eid => this._eventService.getEventByEventIDNoMock(eid));
  // }

}
