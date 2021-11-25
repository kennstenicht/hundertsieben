import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationComponent extends Component {
  // Defaults
  blockName = "c-application"
  @tracked isNavigationOpen = false;


  // Actions
  @action
  toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
  }

  @action
  closeNavigation() {
    this.isNavigationOpen = false;
  }
}
