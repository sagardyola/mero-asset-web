import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { UploadService } from 'src/app/shared/services/upload.service';
import { environment } from 'src/environments/environment';
import { RentalService } from './../../services/rental.service';
import { Rental } from 'src/app/shared/models/rental.model';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.component.html',
  styleUrls: ['./create-rental.component.scss']
})

export class CreateRentalComponent implements OnInit {
  submitting: boolean = false;
  isLoading: boolean = false;
  rental;
  filesToUpload = [];
  url;

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
    public uploadService: UploadService,
    private dialogRef: MatDialogRef<CreateRentalComponent>,
  ) {
    this.rental = new Rental({});
    this.url = environment.BaseURL + 'rental/create/';
  }

  ngOnInit(): void {

    this.isLoading = true;
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
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.msgService.showError(err);
      })
  }

  create() {
    this.submitting = true;
    // this.uploadService.upload(this.rental, this.filesToUpload, "POST", this.url)
    //   .subscribe((data) => {
    //     this.dialogRef.close(true);
    //     this.msgService.showInfo('Property Added');
    //   },
    //     error => {
    //       this.msgService.showError(error);
    //       this.submitting = false;
    //     })

    this.rentalService.create(this.rental)
      .subscribe(
        (data) => {
          this.dialogRef.close(true);
          this.msgService.showInfo('Property Added');
        },
        error => {
          this.msgService.showError(error);
          this.submitting = false;
        }
      )
  }

  fileChanged(ev) {
    this.filesToUpload = ev.target.files;
    // this.filesToUpload.push() if multiple files push
  }
}