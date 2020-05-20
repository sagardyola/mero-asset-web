import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<RegisterComponent>{

    canDeactivate(component: RegisterComponent, ): boolean {
        if (component.createUserForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }
        return true;
    }
}