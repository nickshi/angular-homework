import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable()
export class ChatService {
  messages: Message[] = [];
  constructor(){}

  addMessage(sender: string, receiver: string, content: string) {
    this.messages.push(new Message(sender, receiver, content, new Date()));
  }

  getMessages() {
    return this.messages;
  }
}