import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user.routing';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }