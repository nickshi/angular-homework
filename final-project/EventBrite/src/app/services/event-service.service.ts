import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/RX';

@Injectable()
export class EventService {
  _currentUser: User;
  _staticEventID = 11;
  _events: Event[] = [
    
  ];
  constructor(private _authService: AuthService, private _http: HttpClient) {
    
  }

  createEvent(event: Event): Observable<Event> {
    event.eventID = this._staticEventID++;
    event.userID = this.currentUser().userID;
    this._events.push(event);
    return Observable.of(event).delay(1000);
  }

  getEvents(): Observable<Event[]> {
    return Observable.of(this._events).delay(1000);
  }

  getEventByEventID(eid: Number): Observable<Event> {
    let event = this._events.find(event => event.eventID == eid);

    return Observable.of(event).delay(1000);
  }
  
  currentUser(): User {
    return this._authService.currentUser();
  }

  searchEvents(keyword: string) : Observable<Event[]> {
    keyword = keyword.toLowerCase();
    let result = this._events.filter((ev) => ev.eventName.toLowerCase().indexOf(keyword) != -1 || ev.eventType.toLowerCase().indexOf(keyword) != -1)
    console.log(result);
    return Observable.of(result).delay(1000);
  }

  getUserCreateEvents() : Observable<Event[]> {
    let events = this.currentUser().createEvents.map(eid => this._events.find(ev => ev.eventID == eid));
    return Observable.of(events).delay(1000);
  }

  getUserJoinEvents() : Observable<Event[]> {
    let events = this.currentUser().createEvents.map(eid => this._events.find(ev => ev.eventID == eid));
    return Observable.of(events).delay(1000);
  }

  joinEvent(eid: Number) : Observable<any> {
    this.currentUser().joinEvent(eid);
    return Observable.of(null).delay(1000);
  }

  getEventByEventIDNoMock(eid: Number) {
    let event = this._events.find(event => event.eventID == eid);

    return event;
  }

  searchMovie(title:String) : Observable<any> {
    return this._http.get('http://www.omdbapi.com/?t=' + title + '&apikey=d2b5bdbf')
     .catch( error => {
       console.log("error catched", error);
       return Observable.of({description: "Error Value Emitted"});
     })
  }
}