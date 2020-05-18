import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalService } from 'src/app/rental/services/rental.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Rental } from 'src/app/shared/models/rental.model';

@Component({
  selector: 'app-explore-rental',
  templateUrl: './explore-rental.component.html',
  styleUrls: ['./explore-rental.component.scss']
})
export class ExploreRentalComponent implements OnInit {

  rental;
  submitting: boolean = false;
  isLoading: boolean = false;
  results = [];
  itemForVal;
  itemTypeVal;
  itemTypeValue;

  constructor(
    public router: Router,
    public rentalService: RentalService,
    public msgService: MsgService
  ) {
    this.rental = new Rental({});
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.rentalService
      .getCreate()
      .subscribe((data: any) => {
        this.itemForVal = data.itemFor;
        this.itemTypeValue = data.itemType;
        this.changeItemFor(this.itemTypeValue);
        this.submit();

        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.msgService.showError(err);
      })
  }

  submit() {
    this.submitting = true;
    this.rentalService
      .explore(this.rental)
      .subscribe(
        (data: any) => {
          if (data.length) {
            this.results = data;
          } else {
            this.msgService.showInfo('No results matched your search query');
          }
          this.submitting = false;
        },
        error => {
          this.msgService.showError(error)
          this.submitting = false;
        }
      )
  }

  changeItemFor(val) {
    if (val == 'Homestay' || val == 'Roommate') {
      this.itemTypeVal = this.itemTypeValue.slice(0, 4);
    } else {
      this.itemTypeVal = this.itemTypeValue;
    }
    this.rental.itemType = null;
  }

}
