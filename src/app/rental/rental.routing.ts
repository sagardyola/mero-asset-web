import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRentalComponent } from './components/create-rental/create-rental.component';
import { UpdateRentalComponent } from './components/update-rental/update-rental.component';
import { DetailsRentalComponent } from './components/details-rental/details-rental.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './layouts/main/main.component';

const rentalRoute: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: MainComponent
            },
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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(rentalRoute)],
    exports: [RouterModule]
})
export class RentalRoutingModule { }