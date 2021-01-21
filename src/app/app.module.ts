import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {carsReducer, editCarIdReducer} from './car-tool/reducers/car.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {CarToolModule} from './car-tool/car-tool.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      cars:carsReducer,
      editCarId:editCarIdReducer
    }),
    StoreDevtoolsModule.instrument(),
    CarToolModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
