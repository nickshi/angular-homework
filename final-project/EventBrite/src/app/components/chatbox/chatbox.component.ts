import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models/message.model';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  @Input() messages: Message[];
  @Output() messageSend: EventEmitter<any> = new EventEmitter();
  @Output() boxClosed: EventEmitter<any> = new EventEmitter();

  messageContent: string = "";
  
  constructor() { 
    
  }

  ngOnInit() {
  }

  sendMessage() {
    if(this.messageContent != "")
      this.messageSend.emit(this.messageContent);
  }

  closeBox() {
    this.boxClosed.emit(null);
  }
}

