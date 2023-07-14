import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  fields = [
    {
      name: 'Canchas de Futbol Don oscar',
      address: 'Av. La Florida 1234',
      phone: '+569 1234 5678',
      image: 'https://www.granvalparaiso.cl/wp-content/uploads/2014/09/canchas.jpg',
      price: 15000,
      rating: 4.5
    },
    {
      name: 'Canchas de Futbol Don Pepe',
      address: 'Av. La Florida 1234',
      phone: '+569 1234 5678',
      image: 'https://citymagazine.cl/wp-content/uploads/2022/10/DSC4880.jpg',
      price: 15000,
      rating: 4.5
    },
    {
      name: 'Canchas de Futbol Don Juanito',
      address: 'Av. La Florida 1234',
      phone: '+569 1234 5678',
      image: 'https://citymagazine.cl/wp-content/uploads/2022/10/DSC4880.jpg',
      price: 15000,
      rating: 4.5
    },
  ]



  constructor() { }

  ngOnInit() {
  }
}
