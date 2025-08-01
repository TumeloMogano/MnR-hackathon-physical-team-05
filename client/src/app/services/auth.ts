import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  getBearerToken(){
    return localStorage.getItem('bearer');
  }
  isAuthenticatedUser(){
    return !!localStorage.getItem('bearer'); 
  }
  logout(){
    localStorage.removeItem('bearer');
  }
}
