import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Websocketservice } from '../services/websocketservice';

@Component({
  selector: 'app-alerts',
  imports: [FormsModule, CommonModule],
  templateUrl: './alerts.html',
  styleUrl: './alerts.css',
  standalone: true
})
export class Alerts implements OnInit {
  message: string = '';

  constructor(private socket: Websocketservice) { }

  ngOnInit(): void {
    this.socket.connect();
  }

  sendMessage() {
    this.socket.sendMessage(this.message);
  }
}
