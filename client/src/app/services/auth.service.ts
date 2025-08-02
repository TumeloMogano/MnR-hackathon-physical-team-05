import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {}

  options = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  LoginUser(email: string, password: string): Observable<any> {
    const body = {
    email: email,
    password: password,
  };

  return this.http.post(`${environment.API_URL}/auth/login`, body);
  }

  SignUpUser(user: User): Observable<any> {
    return this.http.post(`${environment.API_URL}/auth/signup`, user);
  }

  getBearerToken() {
    return localStorage.getItem('bearer');
  }
  isAuthenticatedUser() {
    return !!localStorage.getItem('bearer');
  }
  logout() {
    localStorage.removeItem('bearer');
  }
}
