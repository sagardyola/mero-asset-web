import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './../layouts/dashboard/dashboard.component';
import { SidenavRentalComponent } from './components/sidenav-rental/sidenav-rental.component';
import { MainRentalComponent } from './components/main-rental/main-rental.component';
import { ListRentalComponent } from './components/list-rental/list-rental.component';
import { DetailsRentalComponent } from './components/details-rental/details-rental.component';

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
                component: MainRentalComponent
            },
            {
                path: 'viewRental',
                component: ListRentalComponent
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