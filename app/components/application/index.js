import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ApplicationComponent extends Component {
  // Services
  @service app;


  // Defaults
  blockName = 'c-application';


  // Hooks
  constructor() {
    super(...arguments);

    this.fixCssVh();
    window.addEventListener('resize', this.fixCssVh);
  }


  // Functions
  fixCssVh() {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
