import { Component, OnInit, ViewChild } from '@angular/core';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') public createUserForm: NgForm;
  user;
  genderVal;
  submitting: boolean = false;
  constructor(
    public router: Router,
    public msgService: MsgService,
    public authService: AuthService
  ) {
    this.user = new User({});
  }

  ngOnInit(): void {
    this.authService
      .getRegister()
      .subscribe((data: any) => {
        this.genderVal = data.gender;
      }, err => {
        this.msgService.showError(err);
      })
  }

  register() {

    this.submitting = true;
    this.authService.register(this.user)
      .subscribe(
        (data) => {
          this.createUserForm.reset();
          this.msgService.showInfo('Registration successful please login');
          this.router.navigate(['/auth/login']);
        },
        error => {
          this.msgService.showError(error);
          this.submitting = false;
        }
      )
  }
}
