import { Component, OnInit } from '@angular/core';
import { WikipediaSearch } from "../../services/wikipedia-search.service";
import { GiphyService } from "../../services/giphy-service.service";
import { SearchItem } from "../../models/search-item.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WikipediaSearch, GiphyService]
})
export class HomeComponent implements OnInit {

  searchText: string;

  searchResult: string[] = [];

  searchImageItems: string[];

  constructor(private _wikipediaService: WikipediaSearch, private _giphyService: GiphyService) { this.searchText = "";}

  btnSearch() {
    this._wikipediaService.search(this.searchText).subscribe(data => {

      this.searchResult = data[1];
      this.searchImageItems = [];
      this._wikipediaService.addSearchItem(new SearchItem(new Date(), data[1]));
    });
  }

  btnGiphyApiSearch() {
    this._giphyService.search(this.searchText).subscribe(data => {
      this.searchResult = [];
      this.searchImageItems = data.data.map(item => item.images['480w_still']['url']);
    })
  }

  ngOnInit() {
  }

}
