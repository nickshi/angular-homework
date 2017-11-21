import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie-service.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private searchStream = new Subject<string>();
  data: any = {};
  eventSearchWord: string = "";
  movies: Movie[] = [];
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.searchStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((input: string) => this._movieService.searchMovie(input))
    .subscribe(
      data => {
        this.data = data;
        this.movies = [];
        let movie = new Movie(
         this.data.imdbID,
         this.data.Title,
         this.data.Year,
         this.data.Rated,
         this.data.Released,
         this.data.Runtime,
         this.data.Genre,
         this.data.Director,
         this.data.Poster,
         this.data.Ratings,
         this.data.Plot);
       
        this.movies.push(movie);
        
      }
    )
  }

  searchMovies() {
    this.searchStream.next(this.eventSearchWord);
  }

  addMovie() {
    let movie = new Movie(
     this.data.imdbID,
     this.data.Title,
     this.data.Year,
     this.data.Rated,
     this.data.Released,
     this.data.Runtime,
     this.data.Genre,
     this.data.Director,
     this.data.Poster,
     this.data.Ratings,
     this.data.Plot);
    this._movieService.addMovie(movie);
  }

  onSearch(movieName: string) {
    this.searchStream.next(movieName);
  }
}
