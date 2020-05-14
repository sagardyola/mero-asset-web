import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { DefaultComponent } from './layouts/default/default.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ExploreModule } from './explore/explore.module';
import { RentalModule } from './rental/rental.module';
import { UserModule } from './User/User.module';

@NgModule({
  declarations: [
    AppComponent,
    // DefaultComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AuthModule,
    UserModule,
    ExploreModule,
    RentalModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
