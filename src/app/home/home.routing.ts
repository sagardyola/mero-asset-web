import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { WhyMeroassetComponent } from './why-meroasset/why-meroasset.component';
import { HomepageComponent } from './homepage/homepage.component';

const homeRoute: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent
    },
    {
        path: 'why-meroasset',
        component: WhyMeroassetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoute)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }