import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RentalService } from '../../services/rental.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Rental } from 'src/app/shared/models/rental.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details-rental',
  templateUrl: './details-rental.component.html',
  styleUrls: ['./details-rental.component.scss']
})
export class DetailsRentalComponent implements OnInit {
  id: string;
  user;
  rental;
  imgUrl;
  isLoading: boolean = false;
  hideStepper;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public rentalService: RentalService,
    public msgService: MsgService
  ) {
    this.rental = new Rental({});
    this.id = this.activeRoute.snapshot.params['id'];
    this.imgUrl = environment.ImgUrl;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.rentalService.details(this.id)
      .subscribe(
        (data: any) => {
          this.rental = data;

          if (this.rental.itemType == 'Commercial Property' || this.rental.itemType == 'Land') {
            this.hideStepper = true;
          }
          this.isLoading = false;
        },
        error => {
          this.router.navigate(['**']);

          // this.isLoading = false;
          // this.msgService.showError(error);
        }
      )
  }

}
