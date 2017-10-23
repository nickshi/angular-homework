import { Component, OnInit } from '@angular/core';
import { WikipediaSearch } from '../wikipedia-search.service';
import { SearchItem } from '../search-item.model';
@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css'],
  providers:[ WikipediaSearch ]
})
export class SearchHistoryComponent implements OnInit {

  searchItems: SearchItem[];
  constructor(private _wikipediaSearch : WikipediaSearch) { 
    this.searchItems = this._wikipediaSearch.getSearchItems();
  }

  ngOnInit() {

  }

}
