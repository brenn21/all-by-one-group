import { Component, OnInit } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-car',
  standalone: true,
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  imports: []
  
})export class CarComponent implements OnInit {

  car: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
      color: 'Blue',
      price: 230456,
      photo: 'image.png'
    }
  ];

    ngOnInit(): void {
   
  }

  
 
}
