import {AfterContentInit, Component, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterContentInit {

  map = null;
  city = [52.38333, 4.9];
  zoom = 12;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this._mapInit('map-id');
  }

  _mapInit(container) {
    this.map = Leaflet.map(container, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      markerZoomAnimation: true
    });

    this._renderLayer();
  }

  _renderLayer() {
    Leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `\
        &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors &copy;
        <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

}
