import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';
import {offers} from '../../../../assets/mocks/offers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterContentInit, OnDestroy {

  map = null;
  zoom = 12;
  city = [52.38333, 4.9];
  iconSize = [30, 30];
  iconUrl = `assets/img/pin.svg`;
  markers = Leaflet.layerGroup();
  activeMarker = Leaflet.layerGroup();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this._mapInit('map-id');
    this._renderPoints(offers);
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

  get icon() {
    return Leaflet.icon({
      iconUrl: this.iconUrl,
      iconSize: this.iconSize
    });
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

  _renderPoints(offersList) {
    this.markers.clearLayers();
    this.activeMarker.clearLayers();

    offersList.map((offer) => {
      const {latitude: x, longitude: y} = offer.location;
      const marker = Leaflet.marker(
        [x, y], {icon: this.icon}
      );
      this.markers.addLayer(marker);
    });

    this.map.addLayer(this.markers);
  }

}
