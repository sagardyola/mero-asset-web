import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public userService: UserService,
    public msgService: MsgService
  ) {
    this.user = new User({});
  }

  ngOnInit(): void {
    this.userService
      .profile()
      .subscribe((data: any) => {
        this.user = data;
      }, err => {
        this.msgService.showError(err);
      })
  }

}
