import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import mapboxgl from 'mapbox-gl';
import { action } from '@ember/object';

export default class ContentMapComponent extends Component {
  // Defaults
  blockName = 'c-content-map';
  @tracked map = null;


  // Actions
  @action
  setupMap(element) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2VubnN0ZW5pY2h0IiwiYSI6ImNpZXBvYXM2aDAwNmh0amtucDVnbXpqMzUifQ.i4Jhf7s4xL-2cHTu6tW4-Q';

    const map = new mapboxgl.Map({
      attributionControl: false,
      center: [this.args.lng, this.args.lat],
      container: element,
      style: this.args.style,
      zoom: this.args.zoom
    });

    map.scrollZoom.disable();

    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false
      }),
      'bottom-right'
    );

    this.map = map;
  }

  @action
  updateStyle(style) {
    this.map.setStyle(this.args.style);
  }
}
