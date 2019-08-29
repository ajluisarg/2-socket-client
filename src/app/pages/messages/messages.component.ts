import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent{


  constructor(private readonly webSocketService: WebsocketService) {}
  get user(){
    return this.webSocketService.user;
  }
}
