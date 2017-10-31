import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable()
export class ChatService {
  messages: Message[] = [
    new Message("nick", "bob", "hi", new Date()),
    new Message("bob", "nick", "halo", new Date()),
    new Message("nick", "bob", "how is going?", new Date()),
    new Message("bob", "nick", "so far so good", new Date()),
  ];
  constructor(){
    
  }

  addMessage(sender: string, receiver: string, content: string) {
    this.messages.push(new Message(sender, receiver, content, new Date()));
  }

  getMessages() {
    return this.messages;
  }
}