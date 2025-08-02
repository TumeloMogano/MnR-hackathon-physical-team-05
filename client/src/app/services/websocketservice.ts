import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class Websocketservice {
  private socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  connect() {
    this.socket.on('connect', () => {
      console.log('Connected to the server');
    });
  }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  disconnect() {
    this.socket.disconnect();
  }
}
