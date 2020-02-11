import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {City, Offer} from '../../interfaces';
import {OffersService} from '../../services/offers.service';

enum sortTypes {
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
}

@Component({
  selector: 'app-offers-list-sort',
  templateUrl: './offers-list-sort.component.html',
  styleUrls: ['./offers-list-sort.component.scss']
})
export class OffersListSortComponent implements OnInit, OnChanges {

  @Input() activeCity: City;
  @Input() activeOffers: Offer[];

  activeOffersStatic = [];
  sortTypes = sortTypes;
  isVisible = false;
  activeItem = 0;

  constructor(private offersService: OffersService) {}

  ngOnChanges(changes) {
    if (changes.activeCity && this.activeCity !== changes.activeCity.previousValue) {
      this.resetState();
    }
  }

  ngOnInit() {
    this.activeOffersStatic = this.activeOffers;
  }

  resetState() {
    this.isVisible = false;
    this.activeItem = 0;
    this.activeOffersStatic = this.activeOffers;
  }

  sortTypeClickHandler(i: number) {
    this.activeItem = i;
    this.isVisible = false;
    this.sortOffers(i);
  }

  sortOffers(i: number) {
    const activeOffersClone = [];
    Object.assign(activeOffersClone, this.activeOffersStatic);

    switch (this.sortTypes[i]) {
      case `Popular`:
        return this.sortByPopular(this.activeOffersStatic);
      case `Price: low to high`:
        return this.sortByPriceLowToHigh(activeOffersClone);
      case `Price: high to low`:
        return this.sortByPriceHighToLow(activeOffersClone);
      case `Top rated first`:
        return this.sortByTopRated(activeOffersClone);
      default:
        return this.activeOffersStatic;
    }
  }

  sortByPopular(offers) {
    this.offersService.setActiveOffers(offers);
  }

  sortByPriceLowToHigh(offers) {
    offers.sort((a, b) => {
      return a.price - b.price;
    });

    this.offersService.setActiveOffers(offers);
  }

  sortByPriceHighToLow(offers) {
    offers.sort((a, b) => {
      return b.price - a.price;
    });

    this.offersService.setActiveOffers(offers);
  }

  sortByTopRated(offers) {
    offers.sort((a, b) => {
      return b.rating - a.rating;
    });

    this.offersService.setActiveOffers(offers);
  }
}
