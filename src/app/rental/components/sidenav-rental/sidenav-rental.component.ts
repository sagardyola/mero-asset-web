import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRentalComponent } from './../create-rental/create-rental.component';

@Component({
  selector: 'app-sidenav-rental',
  templateUrl: './sidenav-rental.component.html',
  styleUrls: ['./sidenav-rental.component.scss']
})
export class SidenavRentalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(CreateRentalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
