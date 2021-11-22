import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationComponent extends Component {
  // Defaults
  blockName = "c-application"
  @tracked isNavigationOpen = false;
  @tracked showCookieNotice = false;


  // Hooks
  constructor(owner, args) {
    super(owner, args);

    window.addEventListener('hashchange', this.checkHash.bind(this), false);
  }


  // Actions
  @action
  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
  }

  @action
  closeNavigation() {
    this.isNavigationOpen = false;
  }

  @action
  toggleCookieNotice() {
    this.showCookieNotice = !this.showCookieNotice;
  }


  // Functions
  checkHash() {
    if (location.hash == '#change-cookie-settings') {
      this.toggleCookieNotice();

      location.hash = '';
    }
  }
}
