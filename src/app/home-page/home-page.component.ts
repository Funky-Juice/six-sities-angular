import {Component, OnInit} from '@angular/core';
import {Offer} from '../shared/interfaces';
import {offers} from '../../assets/mocks/offers';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  offers: Offer[] = offers;

  constructor() {
  }

  ngOnInit() {
  }

}
