import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../shared/shared.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { WhyMeroassetComponent } from './why-meroasset/why-meroasset.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    WhyMeroassetComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
