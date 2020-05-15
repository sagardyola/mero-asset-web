import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreRentalComponent } from './explore-rental/explore-rental.component';
import { RentalService } from '../rental/services/rental.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ExploreRentalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExploreRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RentalService
  ]
})
export class ExploreModule { }
