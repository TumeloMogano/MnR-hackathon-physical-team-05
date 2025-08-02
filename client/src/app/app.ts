import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Websocketservice } from './services/websocketservice';
import { io } from 'socket.io-client';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnDestroy, OnInit {
  private messageSubscription: Subscription;
  newMessage: string = '';

  constructor(private socketService: Websocketservice) {
    this.messageSubscription = this.socketService
      .on('message')
      .subscribe((data) => {
        console.log(data.text);
      });
  }
  ngOnInit(): void {
    this.sendMessage();
  }

  sendMessage() {
    this.socketService.on('message').subscribe((res) => {
      this.newMessage = res;
      this.showSimplePopup();
    });
  }

  showPopup = false;

  showSimplePopup() {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 5000);
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }
}
