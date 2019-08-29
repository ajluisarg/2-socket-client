import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Observable, combineLatest } from 'rxjs';
import {tap, pairwise, filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('chatMessages', {static: true}) chatMessages: ElementRef;

  public text: string;

  public messages: {body: string, from: string}[] = [];
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe((message)=>{
      console.log(message);
      
      this.messages.push(message);
    })
  }

  send(){
    if(!this.text){
      return;
    }
    this.chatService.sendMessage(this.text);
    console.log(this.text);
    this.text = "";


    setTimeout(() => {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement
      .scrollHeight;
    }, 50);

  }

}
