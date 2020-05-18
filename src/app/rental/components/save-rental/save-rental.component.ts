import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { UploadService } from 'src/app/shared/services/upload.service';
import { environment } from 'src/environments/environment';
import { RentalService } from './../../services/rental.service';
import { Rental } from 'src/app/shared/models/rental.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-save-rental',
  templateUrl: './save-rental.component.html',
  styleUrls: ['./save-rental.component.scss']
})
export class SaveRentalComponent implements OnInit {

  submitting: boolean = false;
  isLoading: boolean = false;
  rental;
  filesToUpload = [];
  imgUrl;
  url;
  hideStepper: boolean = false;

  itemForVal;
  itemTypeVal;
  genderVal;
  maritalStatusVal;
  overnightGuestsVal;
  partyHabitsVal;
  smokerVal;

  itemTypeValue;

  constructor(
    public router: Router,
    public msgService: MsgService,
    public rentalService: RentalService,
    public uploadService: UploadService,
    private dialogRef: MatDialogRef<SaveRentalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.rental = new Rental({});
    this.url = environment.BaseURL + 'rental/';
    this.imgUrl = environment.ImgUrl;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.rentalService
      .getCreate()
      .subscribe((data: any) => {
        this.itemForVal = data.itemFor;
        this.genderVal = data.gender;
        this.maritalStatusVal = data.maritalStatus;
        this.overnightGuestsVal = data.overnightGuests;
        this.partyHabitsVal = data.partyHabits;
        this.smokerVal = data.smoker;

        this.itemTypeValue = data.itemType;
        this.changeItemFor(this.itemTypeValue);

        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.msgService.showError(err);
      })

    if (this.data) {
      this.rentalService.details(this.data.dataKey)
        .subscribe(
          (data: any) => {
            this.rental = data;
            this.changeItemType(this.rental.itemType)
            this.isLoading = false;
          },
          error => {
            this.isLoading = false;
            this.msgService.showError(error);
          }
        )
    }
  }

  create() {
    this.submitting = true;
    if (!this.data) {
      this.uploadService.upload(this.rental, this.filesToUpload, "POST", this.url + "create")
        .subscribe((data) => {
          this.dialogRef.close(true);
          this.msgService.showInfo('Property Added');
        },
          error => {
            this.msgService.showError(error);
            this.submitting = false;
          })
    } else {
      this.uploadService.upload(this.rental, this.filesToUpload, "PUT", this.url + this.data.dataKey)
        .subscribe((data) => {
          this.dialogRef.close(true);
          this.msgService.showInfo('Property Updated successfully');
        },
          error => {
            this.msgService.showError(error);
            this.submitting = false;
          })
    }
  }

  fileChanged(ev) {
    this.filesToUpload = ev.target.files;
    // this.filesToUpload.push() if multiple files push
  }

  changeItemFor(val) {
    if (val == 'Homestay' || val == 'Roommate') {
      this.itemTypeVal = this.itemTypeValue.slice(0, 4);
    } else {
      this.itemTypeVal = this.itemTypeValue;
    }
    this.rental.itemType = null;
  }

  changeItemType(val) {
    if (val == 'Commercial Property' || val == 'Land') {
      this.hideStepper = true;
      // clear all the values after changed
    }
  }
}
