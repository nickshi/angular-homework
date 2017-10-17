import { Component, OnInit, Input } from '@angular/core';
import { PyramidRow } from '../../models/pyramidRow.model';
@Component({
  selector: 'app-pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent implements OnInit {
  @Input() pyramidRow: PyramidRow;
  constructor() { }

  ngOnInit() {
  }

}
