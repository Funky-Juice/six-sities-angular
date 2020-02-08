import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferCardComponent } from './shared/components/offer-card/offer-card.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { OfferDetailsComponent } from './shared/components/offer-details/offer-details.component';
import { MapComponent } from './shared/components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OfferCardComponent,
    OfferPageComponent,
    OfferDetailsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
