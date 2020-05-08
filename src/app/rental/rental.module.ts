import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RentalService } from './services/rental.service';
import { RentalRoutingModule } from './rental.routing';

import { CreateRentalComponent } from './components/create-rental/create-rental.component';
import { DetailsRentalComponent } from './components/details-rental/details-rental.component';
import { UpdateRentalComponent } from './components/update-rental/update-rental.component';
import { DashboardComponent } from './../layouts/dashboard/dashboard.component';
import { MainComponent } from './layouts/main/main.component';
import { RentalComponent } from './layouts/rental/rental.component';



// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CreateRentalComponent,
    DetailsRentalComponent,
    UpdateRentalComponent,
    DashboardComponent,
    MainComponent,
    RentalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RentalRoutingModule,
    HttpClientModule,
    FormsModule,



    // BrowserModule,
    // BrowserAnimationsModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }
