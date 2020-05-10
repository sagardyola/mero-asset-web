import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RentalService } from './../../services/rental.service';
import { MsgService } from 'src/app/shared/services/msg.service';

import { CreateRentalComponent } from './../create-rental/create-rental.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-list-rental',
  templateUrl: './list-rental.component.html',
  styleUrls: ['./list-rental.component.scss']
})
export class ListRentalComponent implements OnInit {
  rentals: Array<any>;

  displayedColumns = ['title', 'price', 'dimension', 'location', 'createdAt', 'action'];

  constructor(
    public router: Router,
    public rentalService: RentalService,
    public msgService: MsgService,
    public dialog: MatDialog

  ) {
    this.rentalService
      .listAll()
      .subscribe((data: any) => {
        this.rentals = data;
      }, err => {
        this.msgService.showError(err);
      })
  }

  ngOnInit(): void {
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CreateRentalComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      if (result) {

        this.rentalService
          .listAll()
          .subscribe((data: any) => {
            this.rentals = data;
          }, err => {
            this.msgService.showError(err);
          })
      }
    });

    // const dialogRef = this.dialog.open(CreateRentalComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
