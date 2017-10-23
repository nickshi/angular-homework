import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SearchItem } from './search-item.model';
import { SEARCHITEMS } from './search.data';
import 'rxjs/RX';

@Injectable()
export class WikipediaSearch {


  constructor(private _http: HttpClient) {
    
  }

  search(searchText: string): Observable<any>{
    let url:string = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchText + "&format=json";

    return this._http.get(url).catch( error => {
      return Observable.of({description: "Error Value Emitted"});
    });
    
  }

  addSearchItem(searchItem: SearchItem) {

    SEARCHITEMS.push(searchItem);

  }

  getSearchItems(): SearchItem[]  {
      return SEARCHITEMS;
  }
}