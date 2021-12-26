import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class ApplicationHeaderComponent extends Component {
  // Services
  @service app;


  // Defaults
  blockName = 'c-application-header';
}
