import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  register () {
    this.presentToast('Registro correcto', 'success');
    this.router.navigate(['/home']);
  }

  return () {
    this.router.navigate(['/home']);
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
