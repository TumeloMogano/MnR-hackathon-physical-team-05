import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  imports: [CommonModule],
  templateUrl: './rewards.html',
  styleUrl: './rewards.css',
  standalone: true,
})
export class Rewards {
  rewards = [
    {
      title: 'Safe Driver',
      description: 'Awarded for 30 days of safe driving.',
      score: 'Score: 0-30',
      gradient: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
    },
    {
      title: 'Eco Champion',
      description: 'Earned for fuel-efficient trips.',
      score: 'Score: 31-70',
      gradient: 'linear-gradient(135deg, #34d399 0%, #fbbf24 100%)',
    },
    {
      title: 'Long Hauler',
      description: 'For completing 10,000+ km.',
      score: 'Score: 71-100',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #f59e42 100%)',
    },
  ];
  activeIndex = 0;
}
