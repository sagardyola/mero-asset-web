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
  results = [];
  constructor(
    public router: Router,
    public rentalService: RentalService,
    public msgService: MsgService
  ) {
    this.rental = new Rental({});
  }

  ngOnInit(): void {
  }

  submit() {
    this.submitting = true;
    this.rentalService
      .explore(this.rental)
      .subscribe(
        (data: any) => {
          this.results = data;
        },
        error => {
          this.msgService.showError(error)
        }
      )
  }

}
