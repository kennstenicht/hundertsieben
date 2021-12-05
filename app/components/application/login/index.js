import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationFooterComponent extends Component {
  // Defaults
  blockName = 'c-application-login';
  @tracked password = '';
  @tracked errorMessage = '';

  // Actions
  @action
  signIn() {
    if (this.password === '12345678') {
      this.args.onSuccess();
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid password';
    }
  }
}
