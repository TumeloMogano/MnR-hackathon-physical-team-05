import { Component, signal } from '@angular/core';
import { mockFleetData } from '../models/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  vehicles = mockFleetData;
  expandedVehicle = signal<string | null>(null);
  activeTab = signal<string>('overview');

  toggleExpand(id: string) {
    this.expandedVehicle.set(this.expandedVehicle() === id ? null : id);
  }

  get fleetStats() {
    const total = this.vehicles.length;
    const active = this.vehicles.filter((v) => v.status === 'out').length;
    const depot = this.vehicles.filter(
      (v) => v.status === 'in_building'
    ).length;
    const maintenance = this.vehicles.filter(
      (v) => v.status === 'maintenance'
    ).length;
    const avgRisk = Math.round(
      this.vehicles.reduce((sum, v) => sum + v.riskScore, 0) / total
    );
    const highRisk = this.vehicles.filter((v) => v.riskScore < 60).length;
    return { total, active, depot, maintenance, avgRisk, highRisk };
  }

  get weatherAlerts() {
    return this.vehicles.filter((v) => v.weatherRisk === 'high');
  }

  get lowFuelVehicles() {
    return this.vehicles.filter((v) => v.fuelLevel < 50);
  }

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
