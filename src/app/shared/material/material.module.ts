import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule, MatList } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatNativeDateModule } from '@angular/material/core';

const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule
]



@NgModule({
  // declarations: [],
  imports: [
    // CommonModule,
    material
  ],
  exports: [
    material
  ],
  providers: [
    MatNativeDateModule
  ]
})
export class MaterialModule { }
