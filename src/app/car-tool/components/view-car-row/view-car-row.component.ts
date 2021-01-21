import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: '[view-car-row]',
  templateUrl: './view-car-row.component.html',
  styleUrls: ['./view-car-row.component.scss']
})
export class ViewCarRowComponent implements OnInit {

  @Input()
  car: Car = null;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doEdit() {
    this.editCar.emit(this.car.id);
  }

  doDelete() {
    this.deleteCar.emit(this.car.id);
  }

}
