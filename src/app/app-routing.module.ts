import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {OfferPageComponent} from './offer-page/offer-page.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'offer', component: OfferPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
