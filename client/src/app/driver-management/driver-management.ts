import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mockFleetData } from '../models/model';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
export interface schedule {
  departure: string
  arrival: string
  status: string
  risklevel: string
}
@Component({
  selector: 'app-driver-management',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './driver-management.html',
  styleUrl: './driver-management.css',
  standalone: true,
})

export class DriverManagement {
  constructor(private http: HttpClient) {}

  showSchedulePopup = false;
  selectedVehicle: any = null;
  scheduleForm!: schedule;

  openSchedulePopup(vehicle: any, event: Event) {
    event.stopPropagation();
    this.selectedVehicle = vehicle;
    this.scheduleForm = { status: '', risklevel: '', arrival: '', departure: '' };
    this.showSchedulePopup = true;
  }

  closeSchedulePopup() {
    this.showSchedulePopup = false;
  }

  submitSchedule() {
    // Handle schedule logic here (e.g., send to backend)
    console.log('Scheduled:', this.selectedVehicle, this.scheduleForm);
    this.showSchedulePopup = false;
  }

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

  addShedule(){
    this.http.post(`${environment.API_URL}/vehicles/schedule`, this.scheduleForm).subscribe({
      next: res => {
        this.showSchedulePopup = false;
      },
      error: err => {
        this.showSchedulePopup =false;
      }
    })
  }
}
