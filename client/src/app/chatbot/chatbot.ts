import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
  standalone: true
})
export class Chatbot {
  input = '';
  @Input() show: boolean = false;
  messages = [{ from: 'bot', text: 'Hi! How can I help you today?' }];

  constructor(private http: HttpClient){}

  sendMessage() {
    if (!this.input.trim()) return;
    const userMsg = this.input;
    this.messages.push({ from: 'user', text: userMsg });

    this.http.post<{ reply: string }>('http://localhost:3000/api/chat', { message: userMsg })
      .subscribe({
        next: (res) => {
          this.messages.push({ from: 'bot', text: res.reply });
        },
        error: () => {
          this.messages.push({ from: 'bot', text: 'Sorry, I could not reach the server.' });
        }
      });

    this.input = '';
  }

  Close() {
    this.show = false;
  }
}
