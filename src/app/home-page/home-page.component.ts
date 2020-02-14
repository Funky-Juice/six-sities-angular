import {Component, OnDestroy, OnInit} from '@angular/core';
import {OffersService} from '../shared/services/offers.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  pSub: Subscription;

  constructor(private offersService: OffersService) {
  }

  ngOnInit() {
    this.pSub = this.offersService.getAllOffers().subscribe();
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}
