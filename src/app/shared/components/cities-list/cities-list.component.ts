import {Component, DoCheck, Input, KeyValueDiffer, KeyValueDiffers, OnInit} from '@angular/core';
import {City, Offer} from '../../interfaces';
import {OffersService} from '../../services/offers.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit, DoCheck {

  @Input() offers: Offer[];

  private differ: KeyValueDiffer<string, any>;
  activeItem = 0;
  activeOffers = [];
  filteredCitiesList = [];

  constructor(
    private offersService: OffersService,
    private differs: KeyValueDiffers
  ) {
    this.differ = this.differs.find({}).create();
  }

  get activeCity() {
    return this.filteredCitiesList[this.activeItem];
  }

  ngOnInit() {
    this.filterCities(this.offers);
    this.setRandomActiveItem();
    this.setOffersServiceData();
  }

  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        if (item.key === 'activeItem') {
          this.setOffersServiceData();
        }
      });
    }
  }

  setOffersServiceData() {
    this.filterOffers(this.activeCity);

    this.offersService.setActiveCity(this.activeCity);
    this.offersService.setActiveOffers(this.activeOffers);
  }

  filterCities(offers: Offer[]) {
    this.filteredCitiesList = [...new Set(
      offers.map((offer) => JSON.stringify(offer.city))
    )].map((it) => JSON.parse(it));
  }

  filterOffers(city: City) {
    if (city) {
      this.activeOffers = this.offers.filter((offer) => (offer.city.name === city.name));
    }
  }

  setRandomActiveItem() {
    this.activeItem = Math.floor(Math.random() * Math.floor(this.filteredCitiesList.length));
  }

  setActiveItem(index: number) {
    this.activeItem = index;
  }

}
