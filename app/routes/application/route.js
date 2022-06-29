import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  // Services
  @service router;


  // Hooks
  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', this.scrollTop);
  }


  // Hooks
  scrollTop() {
    let scrollElement = document.querySelector('.c-application__content');

    if (scrollElement) {
      scrollElement.scrollTo(0, 0);
    }
  }
}
