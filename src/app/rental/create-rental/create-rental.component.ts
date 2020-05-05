import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { RentalService } from '../services/rental.service';
import { Rental } from 'src/app/shared/models/rental.model';

@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.component.html',
  styleUrls: ['./create-rental.component.scss']
})

export class CreateRentalComponent implements OnInit {
  rental;
  submitting: boolean = false;

  itemFors = [{ id: '1', name: 'sagar' },
  { id: '2', name: 'sunita' }];

  constructor(
    public router: Router,
    public msgService: MsgService,
    public rentalService: RentalService
  ) {
    this.rental = new Rental({});
  }

  ngOnInit(): void {
  }

  create() {
    this.submitting = true;
    this.rentalService.create(this.rental)
      .subscribe(
        (data) => {
          this.msgService.showInfo('Property Added');
          this.router.navigate(['/auth/login']);
        },
        error => {
          this.msgService.showError(error);
          this.submitting = false;
        }
      )
  }

}
