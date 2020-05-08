import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RentalModule } from './rental/rental.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AuthModule,
    UserModule,
    RentalModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
