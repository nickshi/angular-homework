import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/event.model';
@Component({
  selector: 'app-profile-event-card',
  templateUrl: './profile-event-card.component.html',
  styleUrls: ['./profile-event-card.component.css']
})
export class ProfileEventCardComponent implements OnInit {

  @Input() event: Event;
  
  constructor() { }

  ngOnInit() {
  }

}
