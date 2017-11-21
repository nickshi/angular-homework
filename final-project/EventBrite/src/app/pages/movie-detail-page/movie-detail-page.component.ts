import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MovieService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import {
  CanActivate, Router,
  ActivatedRoute,
  RouterStateSnapshot
} from '@angular/router';
@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  movie: Movie;
  
  constructor(
    private _router: ActivatedRoute, 
    private _movieService: MovieService,
    private _location: Location) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent(): void {
    const id = this._router.snapshot.paramMap.get('id');
    this.movie = this._movieService.getMovie(id);

  }

  goBack(): void {
    this._location.back();
  }

}
