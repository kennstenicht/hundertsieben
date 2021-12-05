import Component from '@glimmer/component';

export default class ApplicationFooterComponent extends Component {
  // Defaults
  blockName = 'c-application-footer';

  // Getter and Setter
  get currentYear() {
    return new Date().getFullYear();
  }
}
