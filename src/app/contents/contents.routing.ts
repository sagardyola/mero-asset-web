import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const contentRoute: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(contentRoute)],
    exports: [RouterModule]
})
export class ContentsRoutingModule { }
