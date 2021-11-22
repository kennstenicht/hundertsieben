import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  // Services
  @service intl;


  // Hooks
  beforeModel() {
    this.intl.setLocale('de');
  }
}
