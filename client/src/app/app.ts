import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Websocketservice } from './services/websocketservice';
import { io } from 'socket.io-client';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy{
  private messageSubscription: Subscription;
  messages: string[] = [];
  newMessage: string = '';

  constructor(private socketService: Websocketservice) {
    this.messageSubscription = this.socketService
      .on('message')
      .subscribe((data) => {
        console.log(data.text)
      });
  }

  sendMessage() {
    this.socketService.emit('message', { text: "this.newMessage" });
    this.newMessage = '';
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }
}
