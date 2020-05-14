import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreRentalComponent } from './explore-rental/explore-rental.component';


const routes: Routes = [
  {
    path: '',
    component: ExploreRentalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
