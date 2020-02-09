import {Component, DoCheck, Input, KeyValueDiffer, KeyValueDiffers, OnInit} from '@angular/core';
import {Offer} from '../../interfaces';
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
        console.log('item changed', item);

        if (item.key === 'activeItem') {
          this.setOffersServiceData();
        }
      });
    }
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
  }

}
