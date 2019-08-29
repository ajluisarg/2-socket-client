import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private readonly webSocketService: WebsocketService, private readonly router: Router){}

  canActivate(): boolean{
    if(this.webSocketService.user){
      return true;
    }
    this.router.navigate(['/']);
  }
  
}
