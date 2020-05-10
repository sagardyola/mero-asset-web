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

import { ListRentalComponent } from './components/list-rental/list-rental.component';
import { SidenavRentalComponent } from './components/sidenav-rental/sidenav-rental.component';
import { MainRentalComponent } from './components/main-rental/main-rental.component';
import { createComponent } from '@angular/compiler/src/core';

// import { FlexLayoutModule } from '@angular/flex-layout';

// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CreateRentalComponent,
    DetailsRentalComponent,
    UpdateRentalComponent,
    DashboardComponent,

    ListRentalComponent,
    SidenavRentalComponent,
    MainRentalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RentalRoutingModule,
    HttpClientModule,
    FormsModule

    // FlexLayoutModule

    // BrowserModule,
    // BrowserAnimationsModule
  ],
  providers: [
    RentalService
  ],
  entryComponents: [
    CreateRentalComponent
  ]
})
export class RentalModule { }
