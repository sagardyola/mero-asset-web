import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RentalService } from './../../services/rental.service';
import { MsgService } from 'src/app/shared/services/msg.service';

import { CreateRentalComponent } from './../create-rental/create-rental.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-list-rental',
  templateUrl: './list-rental.component.html',
  styleUrls: ['./list-rental.component.scss']
})
export class ListRentalComponent implements OnInit {
  rentals: Array<any>;
  isLoading: boolean = false;
  @ViewChild('table') table: MatTable<any>;
  displayedColumns = ['title', 'price', 'dimension', 'location', 'createdAt', 'action'];

  constructor(
    public router: Router,
    public rentalService: RentalService,
    public msgService: MsgService,
    public dialog: MatDialog

  ) {
    this.isLoading = true;
    this.rentalService
      .listAll()
      .subscribe((data: any) => {
        this.rentals = data;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.msgService.showError(err);
      })
  }

  ngOnInit(): void {
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
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
  }

  onUpdate(id) {

  }

  remove(id, index) {
    var con = confirm('Are you sure to remove?');
    if (con) {
      this.rentalService.remove(id).subscribe(
        data => {
          this.msgService.showInfo('Removed');
          this.rentals.splice(index, 1);
          this.table.renderRows();
        },
        err => {
          this.msgService.showError(err);
        }
      )
    }
  }

}
