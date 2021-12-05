import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationComponent extends Component {
  // Services
  @service cookies;

  // Defaults
  blockName = 'c-application';
  @tracked isNavigationOpen = false;
  @tracked correctPassword = this.isPasswordSaved;

  // Getter and setter
  get isPasswordSaved() {
    return this.cookies.read('isPasswordSaved') === 'true';
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
  enterWebsite() {
    this.correctPassword = true;

    this.cookies.write('isPasswordSaved', true);
  }
}
