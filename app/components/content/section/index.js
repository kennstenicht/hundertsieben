import Component from '@glimmer/component';

export default class ContentSectionComponent extends Component {
  // Defaults
  blockName = 'c-content-section';


  // Getter and setter
  get style() {
    return this.args.style ?? 'light';
  }
}
