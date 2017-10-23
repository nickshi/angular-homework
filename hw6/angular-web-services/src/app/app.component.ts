import { Component } from '@angular/core';
import { WikipediaSearch } from "./wikipedia-search.service";
import { GiphyService } from "./giphy-service.service";
import { SearchItem } from "./search-item.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WikipediaSearch, GiphyService]
})
export class AppComponent {
  title = 'app';

  searchText: string;

  searchResult: string[] = [];

  searchImageItems: string[];

  constructor(private _wikipediaService: WikipediaSearch, private _giphyService: GiphyService) { this.searchText = "";}

  btnSearch() {
    this._wikipediaService.search(this.searchText).subscribe(data => {

      this.searchResult = data[1];
      this._wikipediaService.addSearchItem(new SearchItem(new Date(), data[1]));
    });
  }

  btnGiphyApiSearch() {
    this._giphyService.search(this.searchText).subscribe(data => {
      console.log(data);
      this.searchImageItems = data.data.map(item => item.images['480w_still']['url']);
    })
  }
}
