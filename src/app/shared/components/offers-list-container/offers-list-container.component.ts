import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../interfaces';

@Component({
  selector: 'app-offers-list-container',
  templateUrl: './offers-list-container.component.html',
  styleUrls: ['./offers-list-container.component.scss']
})
export class OffersListContainerComponent implements OnInit {

  @Input() activeOffers: Offer[];

  constructor() { }

  ngOnInit() {
  }

}
