import {Injectable} from '@angular/core';
import {City, Offer} from '../interfaces';
import {offers} from '../../../assets/mocks/offers';

@Injectable({providedIn: 'root'})
export class OffersService {

  offers: Offer[] = offers;
  activeCity = {};
  activeOffers = [];

  getById(id: number) {
    return this.offers.find((offer) => offer.id === id);
  }

  setActiveCity(city: City) {
    if (city) {
      this.activeCity = city;
    }
  }

  setActiveOffers(city: City) {
    if (city) {
      this.activeOffers = this.offers.filter((offer) => (offer.city.name === city.name));
    }
  }
}
