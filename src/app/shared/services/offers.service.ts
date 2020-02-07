import {Injectable} from '@angular/core';
import {Offer} from '../interfaces';
import {offers} from '../../../assets/mocks/offers';

@Injectable({providedIn: 'root'})
export class OffersService {

  offers: Offer[] = offers;

  getById(id: number) {
    return this.offers.find((offer) => offer.id === id);
  }
}
