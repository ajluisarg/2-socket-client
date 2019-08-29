import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name: string;

  constructor(private readonly webSocketService: WebsocketService, private readonly router: Router) { }

  ngOnInit() {
  }

  public login() {
    console.log(`login with ${this.name}`);
    
    this.webSocketService.loginWS(this.name).then(()=> this.router.navigateByUrl('/messages'));
    this.name = '';
  }

}
