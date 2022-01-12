

import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import smoothscroll from 'smoothscroll-polyfill';

export default class ApplicationScrollHintComponent extends Component {
  // Services
  @service fastboot;


  constructor() {
    super(...arguments);

    if (!this.fastboot.isFastBoot) {
      // kick off the polyfill!
      smoothscroll.polyfill();
    }
  }

  // Actions
  @action
  scrollDown() {
    if (!this.fastboot.isFastBoot) {
      let scroller = document.querySelector('.c-application__content');
      let newScrollPosition = window.innerHeight + scroller.scrollTop;

      scroller.scroll({ top: newScrollPosition, behavior: 'smooth' });
    }
  }
}
