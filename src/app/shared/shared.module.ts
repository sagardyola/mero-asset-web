import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [

    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [

    PageNotFoundComponent,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
