import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  // Services
  @service app;
  @service router;


  // Hooks
  beforeModel(transition) {
    if (this.app.isPasswordCorrect) {
      this.router.transitionTo('home');
    }
  }
}
