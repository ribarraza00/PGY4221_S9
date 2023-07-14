import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAutheticated = false;

  constructor(private router: Router) { }

  async login(){
    this.isAutheticated = false;

    //add login logic here
    

    this.isAutheticated = true;
    this.router.navigate(['/main']);
  }

  async logout(){
    this.isAutheticated = false;
  }

  async isAuthenticated(){
    return this.isAutheticated;
  }
}
