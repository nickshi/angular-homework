import { Component, OnInit, Input } from '@angular/core';
import { Pyramid } from '../../models/pyramid.model';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  @Input() pyramid: Pyramid;
  constructor() { }

  ngOnInit() {
  }

}
