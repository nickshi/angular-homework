import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie-service.service';
@Component({
  selector: 'app-summary-pages',
  templateUrl: './summary-pages.component.html',
  styleUrls: ['./summary-pages.component.css']
})
export class SummaryPagesComponent implements OnInit {

  historys = [];
  constructor(private _movieService: MovieService) { 
    this.historys = _movieService.getMovieItems();
    console.log(this.historys)
  }

  ngOnInit() {

  }

}
