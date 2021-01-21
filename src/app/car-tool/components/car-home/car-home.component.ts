import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {AppState} from '../../../store/app-state';
import {appendCar, cancelCar, deleteCar, editCar, replaceCar} from '../../actions/car.action';
import { Car } from '../../models/car';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.scss']
})
export class CarHomeComponent implements OnInit {
  cars$ = this.store.pipe(select(state => state.cars));
  editCarId$ = this.store.pipe(select('editCarId'));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  doAddCar(car:Car){
    this.store.dispatch(appendCar({car}));
  }

  doReplaceCar(car:Car){
    this.store.dispatch(replaceCar({car}));
  }

  doDeleteCar(carId:number){
    this.store.dispatch(deleteCar({carId}));
  }

  doEditCar(carId:number){
    this.store.dispatch(editCar({carId}));
  }

  doCancelCar(){
    this.store.dispatch(cancelCar());
  }

}
