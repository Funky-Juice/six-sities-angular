import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../interfaces';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  @Input() offer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
