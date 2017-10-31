import { Component, Inject } from '@angular/core';
import { Message } from './models/message.model';
import { ChatService } from './services/chat-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messages: Message[] = [];

  constructor(private _chatService: ChatService) {
    this.messages = _chatService.getMessages();
  }


}
