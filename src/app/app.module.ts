import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferComponent } from './shared/components/offer/offer.component';
import { OfferPageComponent } from './offer-page/offer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OfferComponent,
    OfferPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
