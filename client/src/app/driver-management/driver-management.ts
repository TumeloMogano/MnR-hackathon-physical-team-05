import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mockFleetData } from '../models/model';

@Component({
  selector: 'app-driver-management',
  imports: [CommonModule],
  templateUrl: './driver-management.html',
  styleUrl: './driver-management.css',
  standalone: true,
})
export class DriverManagement {
  expandedIndex: number = -1;
  vehicles = mockFleetData;
  
  getStatusColor(status: string): string {
    return (
      {
        out: 'bg-blue-500',
        in_building: 'bg-green-500',
        maintenance: 'bg-orange-500',
      }[status] || 'bg-gray-400'
    );
  }

  getRiskColor(score: number): string {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  }
}
