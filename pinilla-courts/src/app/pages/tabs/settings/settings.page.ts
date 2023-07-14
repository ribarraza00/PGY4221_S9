import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  firstname!: string;
  lastname!: string;
  email!: string;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  update() {
    this.presentToast('Datos actualizados', 'success');
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
