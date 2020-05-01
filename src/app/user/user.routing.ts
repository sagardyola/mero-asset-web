import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const userRoute: Routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'edit-profile',
        component: EditProfileComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoute)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
