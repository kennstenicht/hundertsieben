import Component from '@glimmer/component';
import mapboxgl from 'mapbox-gl';

export default class ContentMapMarkerComponent extends Component {
  constructor(owner, args) {
    super(...arguments);

    const marker = new mapboxgl.Marker()
      .setLngLat([args.lng, args.lat])
      .addTo(args.map);
  }
}
