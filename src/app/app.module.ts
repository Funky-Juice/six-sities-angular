import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferCardComponent } from './shared/components/offer-card/offer-card.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { OfferDetailsComponent } from './shared/components/offer-details/offer-details.component';
import { MapComponent } from './shared/components/map/map.component';
import { OffersListContainerComponent } from './shared/components/offers-list-container/offers-list-container.component';
import { CitiesListComponent } from './shared/components/cities-list/cities-list.component';
import { OffersListSortComponent } from './shared/components/offers-list-sort/offers-list-sort.component';
import { EnumToArrayPipe } from './shared/enum-to-array.pipe';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OfferCardComponent,
    OfferPageComponent,
    OfferDetailsComponent,
    MapComponent,
    OffersListContainerComponent,
    CitiesListComponent,
    OffersListSortComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
