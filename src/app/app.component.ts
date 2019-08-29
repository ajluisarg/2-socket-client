import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'basic';

  constructor(private readonly chatService: ChatService){}
  
  ngOnInit(){
    this.chatService.getPrivateMessages().subscribe(console.log);
  }

}
