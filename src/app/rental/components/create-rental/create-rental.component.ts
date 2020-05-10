import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { RentalService } from './../../services/rental.service';
import { Rental } from 'src/app/shared/models/rental.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.component.html',
  styleUrls: ['./create-rental.component.scss']
})

export class CreateRentalComponent implements OnInit {
  rental;
  submitting: boolean = false;

  itemForVal;
  itemTypeVal;
  genderVal;
  maritalStatusVal;
  overnightGuestsVal;
  partyHabitsVal;
  smokerVal;

  constructor(
    public router: Router,
    // public activeRoute: ActivatedRoute,
    public msgService: MsgService,
    public rentalService: RentalService,
    private dialogRef: MatDialogRef<CreateRentalComponent>
  ) {
    this.rental = new Rental({});
  }

  ngOnInit(): void {
    this.rentalService
      .getCreate()
      .subscribe((data: any) => {
        this.itemForVal = data.itemFor;
        this.itemTypeVal = data.itemType;
        this.genderVal = data.gender;
        this.maritalStatusVal = data.maritalStatus;
        this.overnightGuestsVal = data.overnightGuests;
        this.partyHabitsVal = data.partyHabits;
        this.smokerVal = data.smoker;
      }, err => {
        this.msgService.showError(err);
      })
  }

  create() {
    this.submitting = true;
    this.rentalService.create(this.rental)
      .subscribe(
        (data) => {
          this.dialogRef.close(true);
          this.msgService.showInfo('Property Added');


          // this.router.navigate(['/auth/login']);
        },
        error => {
          this.msgService.showError(error);
          this.submitting = false;
        }
      )
  }
}