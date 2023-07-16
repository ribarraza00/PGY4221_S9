import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  email!: string;
  password!: string;

  constructor(private router: Router, private toastController: ToastController, private authService: AuthService) {
    this.authService.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/main']);
      }
    });
  }

  ngOnInit() {
    this.authService.logout();
  }

  async login() {
    if (await this.authService.login(this.email, this.password)) {
      this.presentToast('Bienvenido', 'success');
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
