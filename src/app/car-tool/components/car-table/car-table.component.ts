import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {

  @Input()
  cars: Car[] = [];

  @Input()
  editCarId = 0;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    console.log(this.cars);
  }


  doEdit(carId: number) {
    this.editCar.emit(carId);
  }

  doDelete(carId: number) {
    this.deleteCar.emit(carId);
  }

  doSave(car: Car) {
    this.saveCar.emit(car);
  }

  doCancel() {
    this.cancelCar.emit();
  }
}
