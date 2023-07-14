import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  email!: string;
  password!: string;

  constructor(private router: Router, private toastController: ToastController) {}

  login() {

    console.log(this.email, this.password);

    if (this.email === 'admin@admin.cl' && this.password === 'admin') {
      this.presentToast('Login correcto', 'success');
      this.router.navigate(['/main']);
      return;
    }

    this.presentToast('Usuario o contraseña incorrectos');
  }

  register() {
    this.router.navigate(['/register']);
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
