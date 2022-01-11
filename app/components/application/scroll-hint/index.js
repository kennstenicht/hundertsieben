

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ApplicationScrollHintComponent extends Component {
  // Actions
  @action
  scrollDown() {
    let scroller = document.querySelector('.c-application__content');
    let newScrollPosition = window.innerHeight + scroller.scrollTop;

    scroller.scroll({ top: newScrollPosition, behavior: 'smooth' });
  }
}
