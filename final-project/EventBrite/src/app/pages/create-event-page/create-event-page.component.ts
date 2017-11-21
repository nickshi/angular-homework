import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  NavigationEnd
} from '@angular/router';
declare let gtag: Function
import { EventService } from '../../services/event-service.service';
@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent implements OnInit {

  myForm = new FormGroup({
    eventTitle: new FormControl("", Validators.minLength(3)),
    eventLocation: new FormControl("", Validators.minLength(2)),
    eventImage: new FormControl("", Validators.required),
    eventStartDate: new FormControl("", Validators.required),
    eventEndDate: new FormControl("", Validators.required),
    eventType: new FormControl("", Validators.nullValidator),
    eventDescription: new FormControl("", Validators.required),
    });

  constructor(private _router: Router, private _eventService: EventService) {
    gtag('event', 'event_view_create_event_page');
  }

  ngOnInit() {

  }

  onSubmit() {
    
    let event = new Event(1, 0,
     this.myForm.controls.eventTitle.value,
     this.myForm.controls.eventLocation.value,
     this.myForm.controls.eventStartDate.value,
     this.myForm.controls.eventEndDate.value,
     this.myForm.controls.eventImage.value,
     this.myForm.controls.eventType.value,
     this.myForm.controls.eventDescription.value,
     );

    this._eventService.createEvent(event).subscribe(result => {
      this._router.navigate(['/']);
    });
  }

  cancel() {
    console.log("goto home page")
    this._router.navigate(['/']);
  }

}
