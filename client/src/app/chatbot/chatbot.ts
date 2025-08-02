import { CommonModule } from '@angular/common';
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

  sendMessage() {
    if (!this.input.trim()) return;
    this.messages.push({ from: 'user', text: this.input });
    // Simulate bot reply
    setTimeout(() => {
      this.messages.push({ from: 'bot', text: 'This is a sample response.' });
    }, 700);
    this.input = '';
  }

  Close(){
    this.show = false;
  }
}
