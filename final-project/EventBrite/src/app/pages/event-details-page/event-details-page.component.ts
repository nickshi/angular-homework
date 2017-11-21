import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event.model';
import {
  CanActivate, Router,
  ActivatedRoute,
  RouterStateSnapshot
} from '@angular/router';
@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.css']
})
export class EventDetailsPageComponent implements OnInit {

  event: Event
  
  constructor(
    private _router: ActivatedRoute, 
    private _eventService: EventService,
    private _location: Location) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent(): void {
    const id = +this._router.snapshot.paramMap.get('id');
    
    this._eventService.getEventByEventID(id)
      .subscribe(eve => {
        this.event = eve;
        });
  }


  joinEvent() {
    this._eventService.joinEvent(this.event.eventID).subscribe(()=> {
      console.log('join success!');
    });
  }

  goBack(): void {
    this._location.back();
  }
}
