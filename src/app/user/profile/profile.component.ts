import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id;
  user;
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public userService: UserService,
    public msgService: MsgService
  ) {
    this.id = this.activeRoute.snapshot.params['id'];
    this.user = new User({});
  }

  ngOnInit(): void {
    this.userService
      .profile(this.id)
      .subscribe((data: any) => {
        this.user = data;
      }, err => {
        // this.msgService.showError(err);
        this.router.navigate(['**']);

      })
  }

}
