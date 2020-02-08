import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../interfaces';
import {OffersService} from '../../services/offers.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {

  @Input() offers: Offer[];

  activeItem = 0;
  filteredCitiesList = [];

  constructor(
    private offersService: OffersService
  ) { }

  get activeCity() {
    return this.filteredCitiesList[this.activeItem];
  }

  ngOnInit() {
    this.filterCities(this.offers);
    this.setRandomActiveItem();
    this.setOffersServiceData();
  }

  setOffersServiceData() {
    this.offersService.setActiveCity(this.activeCity);
    this.offersService.setActiveOffers(this.activeCity);
  }

  filterCities(offers: Offer[]) {
    this.filteredCitiesList = [...new Set(
      offers.map((offer) => JSON.stringify(offer.city))
    )].map((it) => JSON.parse(it));
  }

  setRandomActiveItem() {
    this.activeItem = Math.floor(Math.random() * Math.floor(this.filteredCitiesList.length));
  }

  setActiveItem(index: number) {
    this.activeItem = index;
    this.setOffersServiceData();
  }

}
