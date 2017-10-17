import { Component, OnInit } from '@angular/core';
import { PyramidService } from './services/pyramid.service';
import { Pyramid } from './models/pyramid.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PyramidService]
})
export class AppComponent {
  title = 'app';
  pyramid: Pyramid;
  constructor(private pyramidService: PyramidService) {

  }

  getPyramid(): void {
    this.pyramid = this.pyramidService.getPyramid();
  }
  ngOnInit(): void {
    this.getPyramid();
  }
}
