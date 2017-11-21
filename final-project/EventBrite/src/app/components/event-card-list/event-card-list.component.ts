import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-event-card-list',
  templateUrl: './event-card-list.component.html',
  styleUrls: ['./event-card-list.component.css']
})
export class EventCardListComponent implements OnInit {

  @Input() movies:Movie[] = [
    
  ];

  constructor() { }

  ngOnInit() {
    
  }
  
}
