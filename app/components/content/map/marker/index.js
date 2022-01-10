import Component from '@glimmer/component';
import mapboxgl from 'mapbox-gl';

export default class ContentMapMarkerComponent extends Component {
  constructor(owner, args) {
    super(...arguments);

    let el = document.createElement('div');
    el.classList.add('c-content-map-marker');
    el.classList.add(`c-content-map-marker--icon-${args.icon}`);

    const marker = new mapboxgl.Marker(el)
      .setLngLat([args.lng, args.lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h4 class="u-margin-bottom-none">${args.title}</h4><a href="${args.link}" target="_blank">Zur Webseite</a>`
          )
      )
      .addTo(args.map);
  }
}
