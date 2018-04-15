import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RatePlaceComponent } from './rate-place/rate-place.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { CodefestDescriptionComponent } from './codefest-description/codefest-description.component';
import { LandmarkDescriptionComponent } from './landmark-description/landmark-description.component';
import { MikeHousePartyDescriptionComponent } from './mike-house-party-description/mike-house-party-description.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    SignupScreenComponent,
    RatePlaceComponent,
    SignupScreenComponent,
    DashboardComponent,
    DashboardComponent,
    SiteMapComponent,
    CodefestDescriptionComponent,
    LandmarkDescriptionComponent,
    MikeHousePartyDescriptionComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
