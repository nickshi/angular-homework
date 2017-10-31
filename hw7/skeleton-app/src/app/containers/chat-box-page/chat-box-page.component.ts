import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service.service';
import { Message } from '../../models/message.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat-box-page',
  templateUrl: './chat-box-page.component.html',
  styleUrls: ['./chat-box-page.component.css']
})
export class ChatBoxPageComponent implements OnInit {

  messages: Message[] = [];
  constructor(private _chatService: ChatService, private _router: Router) { }

  ngOnInit() {
    this.messages = this._chatService.getMessages();
  }

  sendMessage(content: string) {
    this._chatService.addMessage("nick", "bob", content);
  }

  closeBox(content: string) {
    this._router.navigate(['/login']);
  }

}
