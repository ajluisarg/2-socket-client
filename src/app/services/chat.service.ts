import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private websocket: WebsocketService) { }

  public sendMessage(message: string){
    const payload = {
      from: 'fernando',
      body: message
    }
    console.log('sending message');
    
    this.websocket.emit('message', payload);
  }

  public getMessages(): Observable<any>{
    console.log('get message');
    
    return this.websocket.listen('newMessage')
  }

}
