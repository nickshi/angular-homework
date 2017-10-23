import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class GiphyService {
  constructor(private _http: HttpClient){}
  search(searchText: string): Observable<any> {

    let url = "https://api.giphy.com/v1/gifs/search?api_key=WpJx083il20XG8dPQPWrawX7s2Qt9FZq&q=" + searchText + "&limit=25&offset=0&rating=G&lang=en";
    return this._http.get(url);
  }
}