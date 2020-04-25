import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'

const material = [
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule
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
