import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRentalComponent } from './create-rental/create-rental.component';
import { UpdateRentalComponent } from './update-rental/update-rental.component';
import { DetailsRentalComponent } from './details-rental/details-rental.component';
import { RemoveRentalComponent } from './remove-rental/remove-rental.component';


const rentalRoute: Routes = [
    {
        path: 'create',
        component: CreateRentalComponent
    },
    {
        path: 'update/:id',
        component: UpdateRentalComponent
    },
    {
        path: 'details/:id',
        component: DetailsRentalComponent
    },
    {
        path: 'remove/:id',
        component: RemoveRentalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(rentalRoute)],
    exports: [RouterModule]
})
export class RentalRoutingModule { }