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

  messageContent: string = "";
  
  constructor() { 
    this.messages = [
      new Message("nick", "bob", "hi", new Date()),
      new Message("bob", "nick", "hello", new Date()),
      new Message("nick", "bob", "how is going", new Date()),
      new Message("bob", "nick", "so far so good", new Date()),
    ];
  }

  ngOnInit() {
  }

  sendMessage() {
    this.messageSend.emit(this.messageContent);
  }
}
