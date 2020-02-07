import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Offer} from '../shared/interfaces';
import {OffersService} from '../shared/services/offers.service';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.scss']
})
export class OfferPageComponent implements OnInit {

  offer: Offer;

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.offer = this.offersService.getById(+params.id);
      console.log(`offers`, this.offer);
    });
  }

}
