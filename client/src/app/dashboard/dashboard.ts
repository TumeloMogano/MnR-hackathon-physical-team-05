import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { mockFleetData } from '../models/model';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Chatbot } from "../chatbot/chatbot";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, RouterOutlet, Chatbot],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
})
export class Dashboard {
  showChat = false;
}
