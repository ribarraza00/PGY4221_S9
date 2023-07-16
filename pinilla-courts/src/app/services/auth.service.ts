import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private storageService: StorageService) { }

  async login(email: string, password: string){
    const user = await this.storageService.get(email);

    if(!user){
      return false;
    }

    if(user.password !== password){
      return false;
    }

    this.storageService.set('isAuthenticated', true);
    return true;
  }

  async logout(){
    await this.storageService.set('isAuthenticated', false);
  }

  async isAuthenticated(){
    const isAuthenticated = await this.storageService.get('isAuthenticated');
    return isAuthenticated;
  }
}
