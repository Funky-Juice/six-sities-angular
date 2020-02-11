import {Component, Input, OnInit} from '@angular/core';
import {City, Offer} from '../../interfaces';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-offers-list-container',
  templateUrl: './offers-list-container.component.html',
  styleUrls: ['./offers-list-container.component.scss']
})
export class OffersListContainerComponent implements OnInit {

  @Input() activeOffers: Offer[];
  @Input() activeCity: City;

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }

  get placesPlural() {
    return this.utilsService.getPlural(this.activeOffers.length, 'place', 'places', 'places');
  }
}
