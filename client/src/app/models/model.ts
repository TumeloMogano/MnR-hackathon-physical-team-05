export class User {
    id?: number = 0
    name: string = ''
    email: string = ''
    password: string = ''
}
export interface FleetVehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  status: string;
  location: string;
  driver: string;
  lastUpdate: string;
  riskScore: number;
  weatherRisk: string;
  routeRisk: string;
  maintenanceRisk: string;
  totalMiles: number;
  currentRoute: string;
  weatherConditions: string;
  speedLimit: number;
  currentSpeed: number;
  incidents: number;
  fuelLevel: number;
}

export interface Vehicle {
  id?: string;
  make: string;
  model: string;
  registration: string;
  driver: string;
  status: string;
}

export const mockFleetData: FleetVehicle[] = [
  {
    id: "VH001",
    make: "Ford",
    model: "Transit",
    year: 2022,
    status: "out",
    location: "Downtown Route 45",
    driver: "John Smith",
    lastUpdate: "2 mins ago",
    riskScore: 85,
    weatherRisk: "moderate",
    routeRisk: "low",
    maintenanceRisk: "low",
    totalMiles: 45230,
    currentRoute: "City Center → Industrial District",
    weatherConditions: "Light Rain, 15°C",
    speedLimit: 50,
    currentSpeed: 45,
    incidents: 0,
    fuelLevel: 78,
  },
  // Add more vehicles as needed...
];