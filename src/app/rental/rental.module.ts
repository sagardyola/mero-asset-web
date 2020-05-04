import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateRentalComponent } from './create-rental/create-rental.component';
import { UpdateRentalComponent } from './update-rental/update-rental.component';
import { RemoveRentalComponent } from './remove-rental/remove-rental.component';
import { DetailsRentalComponent } from './details-rental/details-rental.component';
import { RentalRoutingModule } from './rental.routing';
import { SharedModule } from '../shared/shared.module';
import { RentalService } from './services/rental.service';



@NgModule({
  declarations: [
    CreateRentalComponent,
    UpdateRentalComponent,
    RemoveRentalComponent,
    DetailsRentalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RentalRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }
