import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const material = [
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule
]



@NgModule({
  // declarations: [],
  imports: [
    // CommonModule,
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
