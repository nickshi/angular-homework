import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service.service';
import { MOVIE_ITEMS } from '../movie.data';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/RX';
@Injectable()
export class MovieService {
  constructor(private _authService: AuthService, private _http: HttpClient) {
    
  }
  getMovieItems() {
    return MOVIE_ITEMS;
  }
  searchMovie(title:String) : Observable<any> {
    return this._http.get('http://www.omdbapi.com/?t=' + title + '&apikey=d2b5bdbf')
     .catch( error => {
       console.log("error catched", error);
       return Observable.of({description: "Error Value Emitted"});
     })
  }

  addMovie(movie: Movie) {
    MOVIE_ITEMS.push(movie);
  }

  getMovie(mid: String) {
    return MOVIE_ITEMS.find( mv => mv.imdbID == mid);
  }
}
