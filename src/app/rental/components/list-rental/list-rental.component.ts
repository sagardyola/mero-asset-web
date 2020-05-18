import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RentalService } from './../../services/rental.service';
import { MsgService } from 'src/app/shared/services/msg.service';

import { SaveRentalComponent } from './../save-rental/save-rental.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-list-rental',
  templateUrl: './list-rental.component.html',
  styleUrls: ['./list-rental.component.scss']
})
export class ListRentalComponent implements OnInit {
  rentals: Array<any>;
  isLoading: boolean = false;
  @ViewChild('table') table: MatTable<any>;
  displayedColumns = ['price', 'dimension', 'location', 'itemFor', 'itemType', 'createdAt', 'action'];

  constructor(
    // public router: Router,
    public rentalService: RentalService,
    public msgService: MsgService,
    public dialogService: DialogService,
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
    const dialogRef = this.dialog.open(SaveRentalComponent,
      {
        disableClose: true,
        autoFocus: true,
        width: "60%"
      });
    dialogRef.afterClosed().subscribe(result => {
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
    const dialogRef = this.dialog.open(SaveRentalComponent,
      {
        disableClose: true,
        autoFocus: true,
        width: "60%",
        data: {
          dataKey: id
        }
      });



    dialogRef.afterClosed().subscribe(result => {
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

  remove(id, index) {
    this.dialogService.showRemove()
      .then((result) => {
        if (result.value) {
          this.rentalService.remove(id).subscribe(
            data => {
              this.msgService.showInfo('Removed');
              // this.dialogService.showRemoved();
              this.rentals.splice(index, 1);
              this.table.renderRows();
            },
            err => {
              this.msgService.showError(err);
            }
          )
        }
      })
  }

}
