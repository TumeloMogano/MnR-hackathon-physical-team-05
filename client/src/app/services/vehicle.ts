import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = `${environment.API_URL}/vehicles`;

  constructor(private http: HttpClient) {}

  getVehicles() {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicleById(id: string) {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  addVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  updateVehicle(vehicle: Vehicle) {
    return this.http.put<Vehicle>(`${this.apiUrl}/${vehicle.id}`, vehicle);
  }

  deleteVehicle(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
