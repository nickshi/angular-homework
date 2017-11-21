import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie-service.service';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/RX';

@Injectable()
export class ChatService {
  messages: Message[] = [
    new Message("AI", "bob", "Please following the instruction: get movie details by enter 'detail:'+'movie name'. like 'detail:avatar'", new Date()),
  ];
  constructor(private _movieService: MovieService){
    
  }

  addMessage(sender: String, receiver: String, content: String) {
    this.messages.push(new Message(sender, receiver, content, new Date()));
  }

  getMessages() {
    return this.messages;
  }

  getMessageContent(command:String) {
    if(command.startsWith("detail:")) {
      let movieName = command.split(':')[1];
      return this._movieService.searchMovie(movieName)
    } else {
      return Observable.of("Please following the instruction: get movie details by enter 'detail:'+'movie name'. like 'detail:avatar'")
    }
  }
}