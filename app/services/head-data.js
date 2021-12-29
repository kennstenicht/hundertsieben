import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { restartableTask, timeout } from 'ember-concurrency';

export default class HeadDataService extends Service {
  // Defaults
  @tracked blurTitle = '';
  @tracked faviconIndex = 0;
  faviconMap = ['1', 'null', '5', 'null', 'dot', 'null', '0', 'null', '7', 'null', 'dot', 'null', '2', 'null', '0', 'null', '2', 'null', '2', 'null', 'null', 'null', 'null', 'null'];
  siteName = 'Severine und Christoph heiraten';


  // Constructor
  constructor() {
    super(...arguments);

    this.nextFavicon.perform();

    // Change title, if window is not in focus
    window.onblur = () => this.blurTitle = '😲 gibt es was wichtigeres?';
    window.onfocus = () => this.blurTitle = '';
  }


  // Getter and setter
  get favicon() {
    return `/assets/meta/fav-${this.faviconMap[this.faviconIndex]}.svg`;
  }

  get title() {
    return this.blurTitle || "Save the date";
  }


  @restartableTask
  *nextFavicon() {
    yield timeout(400);

    this.faviconIndex++;

    if (this.faviconIndex >= this.faviconMap.length - 1) {
      this.faviconIndex = 0;
    }

    this.nextFavicon.perform();
  }
}
