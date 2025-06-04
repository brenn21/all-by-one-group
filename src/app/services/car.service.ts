import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // private apiUrl = 'http://localhost:9040/api/cars'

  // constructor(private http: HttpClient) { }

  // getCars(): Observable<Car[]> {
  //   return this.http.get<Car[]>(this.apiUrl)
  // }

  // addCar(car: Car): Observable<Car> {
  //   return this.http.post<Car>(this.apiUrl, car)
  // }

  // deleteCar(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`)
  // }

    private mockCars: Car[] = [
    {
      id: 1,
      brand: 'Tesla Model S',
      model: 'Model S',
      year: 2023,
      price: 94990,
      photo: 'assets/images/tesla.jpg',
      color: 'Black'
    },
  ];

  getCars(): Car[] {
    return this.mockCars;
  }

  getCarById(id: number): Car | undefined {
    return this.mockCars.find(car => car.id === id);
  }

}
