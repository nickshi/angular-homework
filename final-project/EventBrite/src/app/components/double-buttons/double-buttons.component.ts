import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-double-buttons',
  templateUrl: './double-buttons.component.html',
  styleUrls: ['./double-buttons.component.css']
})
export class DoubleButtonsComponent implements OnInit {

  @Input() lblPositive:string;
  @Input() lblNegative:string;

  @Output() positiveEvent:EventEmitter<any> = new EventEmitter();
  @Output() negativeEvent:EventEmitter<any> = new EventEmitter();  
  constructor() { 
    this.lblPositive = "Ok";
    this.lblNegative = "Cancel";
  }

  ngOnInit() {

  }

  positiveBtnClick() {
    this.positiveEvent.emit(null);
  }

  negativeBtnClick() {
    this.negativeEvent.emit(null);
  }

}
