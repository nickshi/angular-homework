import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service.service';
import { AuthService } from '../../services/auth-service.service';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat-box-page',
  templateUrl: './chatbox-page.component.html',
  styleUrls: ['./chatbox-page.component.css']
})
export class ChatboxPageComponent implements OnInit {

  user: User;
  messages: Message[] = [];
  constructor(private _authService: AuthService,private _chatService: ChatService, private _router: Router) {
    this.user = this._authService.currentUser();
  }

  ngOnInit() {
    this.messages = this._chatService.getMessages();
  }

  sendMessageToAI(content: String) {
    this._chatService.addMessage(this.user.userName, "AI", content);
    this._chatService.getMessageContent(content).subscribe ( data => {
      console.log(data);
      this.sendMessageToUser(this.decorateMovie(data));
    });
  }

  decorateMovie(data: any) {
    let content = `'${data.Title}' is a ${data.Year} ${data.Country} film directed by ${data.Director}, and
    starring by ${data.Actors}.The film, whoes plot is ${data.Plot}`;
    return content;
  }
  sendMessageToUser(content: String) {
    this._chatService.addMessage("AI", this.user.userName, content);
  }
  sendMessage(content: String) {
    this._chatService.addMessage(this.user.userName, "AI", content);
  }

  closeBox(content: string) {
    this._router.navigate(['/']);
  }

}
