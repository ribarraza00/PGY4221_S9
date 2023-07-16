import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  email!: string;
  password!: string;
  firstname!: string;
  lastname!: string;

  constructor(private toastController: ToastController, private router: Router, private storageService: StorageService) { }

  ngOnInit() {
  }

  async register() {
    const user = await this.storageService.get(this.email);

    if (user) {
      this.presentToast('Email ya registrado, favor de ingresar otro', 'danger');
      return;
    }

    const newUser = {
      email: this.email,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname,
    };

    await this.storageService.set(this.email, newUser);

    this.presentToast('Usuario creado correctamente', 'success');
    await this.router.navigate(['/home']);
  }

  async return() {
    await this.router.navigate(['/home']);
  }

  async presentToast(msg: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: color,
      position: 'bottom',
    });
    toast.present();
  }
}
