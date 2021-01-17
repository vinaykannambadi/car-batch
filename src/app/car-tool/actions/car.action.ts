import { Car } from "../models/car";
import {createAction, props} from '@ngrx/store';

export const appendCar = createAction('[Car] Append Car', props<{car: Car}>());
export const replaceCar = createAction('[Car] Replace Car', props<{car: Car}>());
export const deleteCar = createAction('[Car] Delete Car', props<{carId: number}>());
export const editCar = createAction('[Car] Edit Car', props<{carId: number}>());
export const cancelCar = createAction('[Car] Cancel Car');