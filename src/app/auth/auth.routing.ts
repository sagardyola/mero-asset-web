import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { CanDeactivateGuardService } from '../shared/services/can-deactivate-guard.service';

const authRoute: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
        canDeactivate: [CanDeactivateGuardService]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(authRoute)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
