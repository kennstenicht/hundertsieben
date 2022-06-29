
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ContentCoverComponent extends Component {
  // Defaults
  blockName = 'c-content-countdown';
  @tracked distance = 0;


  // Hooks
  constructor() {
    super(...arguments);

    const countDownDate = new Date("Jul 15, 2022 15:00:00").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();

      this.distance = countDownDate - now;
    }, 1000);
  }


  // Getter and setter
  get isPast() {
    return this.distance < 0;
  }

  get days() {
    return ('0' + Math.floor(this.distance / (1000 * 60 * 60 * 24))).slice(-2);
  }

  get hours() {
    return ('0' + Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  }

  get minutes() {
    return ('0' + Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  }

  get seconds() {
    return ('0' + Math.floor((this.distance % (1000 * 60)) / 1000)).slice(-2);
  }
}
