import {Component, OnInit} from '@angular/core';
import {OffersService} from '../shared/services/offers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private offersService: OffersService) {
  }

  ngOnInit() {
  }

}
