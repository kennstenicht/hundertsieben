

import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import smoothscroll from 'smoothscroll-polyfill';

export default class ApplicationScrollHintComponent extends Component {
  // Hooks
  constructor() {
    super(...arguments);

    smoothscroll.polyfill();
  }

  // Actions
  @action
  scrollDown() {
    let scroller = document.querySelector('.c-application__content');
    let newScrollPosition = window.innerHeight + scroller.scrollTop;

    scroller.scroll({ top: newScrollPosition, behavior: 'smooth' });
  }
}
