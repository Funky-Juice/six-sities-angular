import {Injectable} from '@angular/core';
import {City, Offer} from '../interfaces';
import {offers} from '../../../assets/mocks/offers';

@Injectable({providedIn: 'root'})
export class OffersService {

  offers: Offer[] = offers;
  activeCity: City = null;
  activeOffers: Offer[] = [];

  getById(id: number) {
    return this.offers.find((offer) => offer.id === id);
  }

  setActiveCity(city: City) {
    if (city) {
      this.activeCity = city;
    }
  }

  setActiveOffers(activeoffers: Offer[]) {
    if (activeoffers) {
      this.activeOffers = activeoffers;
    }
  }
}
