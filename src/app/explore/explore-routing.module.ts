import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreRentalComponent } from './explore-rental/explore-rental.component';
import { DetailsRentalComponent } from '../rental/components/details-rental/details-rental.component';


const routes: Routes = [
  {
    path: '',
    component: ExploreRentalComponent
  }, {
    path: ':id',
    component: DetailsRentalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
