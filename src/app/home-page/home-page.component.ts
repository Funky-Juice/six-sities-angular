import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  offers: string[] = [
    `Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
