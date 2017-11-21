import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie-service.service'
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() movie: Movie;
  
  constructor(private _router: Router, private _movieService: MovieService) { }

  ngOnInit() {
  }

  addToHistory() {
    //this._router.navigate(['/eventDetails']);
    this._movieService.addMovie(this.movie);
  }
}
