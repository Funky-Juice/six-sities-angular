import {Component, OnInit} from '@angular/core';
import {Offer} from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  offers: Offer[] = [
    {title: `Beautiful &amp; luxurious apartment at great location`},
    {title: `Wood and stone place`},
    {title: `Canal View Prinsengracht`},
    {title: `Nice, cozy, warm big bed apartment`}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
