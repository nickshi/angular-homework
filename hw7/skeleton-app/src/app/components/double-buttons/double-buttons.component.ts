import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-double-buttons',
  templateUrl: './double-buttons.component.html',
  styleUrls: ['./double-buttons.component.css']
})
export class DoubleButtonsComponent implements OnInit {

  @Input() lblPositive:string;
  @Input() lblNegative:string;
  constructor() { 
    this.lblPositive = "Ok";
    this.lblNegative = "Cancel";
  }

  ngOnInit() {
  }

}
