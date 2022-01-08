import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ApplicationFooterComponent extends Component {
  // Services
  @service app;


  // Defaults
  blockName = 'c-application-footer';


  // Getter and Setter
  get currentYear() {
    return new Date().getFullYear();
  }
}
