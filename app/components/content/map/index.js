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

    map.on('load', () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
      (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
      {
      'id': 'add-3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
      'fill-extrusion-color': '#aaa',

      // Use an 'interpolate' expression to
      // add a smooth transition effect to
      // the buildings as the user zooms in.
      'fill-extrusion-height': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'height']
      ],
      'fill-extrusion-base': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'min_height']
      ],
      'fill-extrusion-opacity': 0.6
      }
      },
      labelLayerId
      );
      });

    this.map = map;
  }

  @action
  updateStyle(style) {
    this.map.setStyle(this.args.style);
  }
}
