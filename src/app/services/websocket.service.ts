import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public user: User;


  constructor(private socket: Socket) {
    this.loadStorage();
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('connected');
      this.socketStatus = true;
    })
    this.socket.on('disconnect', () => {
      console.log('disconnected');
      this.socketStatus = false;
    })
  }

  public emit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  public listen(event: string): Observable<any> {
    return this.socket.fromEvent(event);
  }

  public loginWS(name: string) {

    return new Promise((resolve, _reject) => {
      this.socket.emit('config-user', { name }, resp => {
        console.log(resp);
        console.log(name);
        
        this.user = new User(name);
        console.log(this.user);
        
        this.saveUserInLocalStorage();
        resolve();
      });

    })
  }

  public saveUserInLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }


  public loadStorage(){
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loginWS(this.user.name);
  }

}
