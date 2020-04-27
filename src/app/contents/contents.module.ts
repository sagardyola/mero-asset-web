import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ContentsRoutingModule } from './contents.routing';

import { SharedModule } from './../shared/shared.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FaqComponent } from './faq/faq.component';
import { WhyMeroassetComponent } from './why-meroasset/why-meroasset.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    FaqComponent,
    WhyMeroassetComponent
  ],
  imports: [
    CommonModule,
    ContentsRoutingModule,
    SharedModule
  ]
})
export class ContentsModule { }
