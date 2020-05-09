import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRentalComponent } from './components/create-rental/create-rental.component';
import { UpdateRentalComponent } from './components/update-rental/update-rental.component';
import { DetailsRentalComponent } from './components/details-rental/details-rental.component';
import { DashboardComponent } from './../layouts/dashboard/dashboard.component';
import { SidenavRentalComponent } from './components/sidenav-rental/sidenav-rental.component';
import { MainRentalComponent } from './components/main-rental/main-rental.component';

const rentalRoute: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: SidenavRentalComponent,
                outlet: 'sidenav'
            },
            {
                path: '',
                component: MainRentalComponent,
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