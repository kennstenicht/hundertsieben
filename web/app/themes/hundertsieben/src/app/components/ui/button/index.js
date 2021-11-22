import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiButtonComponent extends Component {
  // Defaults
  blockName = 'c-ui-button';


  // Getter and setter
  get type() {
    return this.args.type ?? 'button';
  }


  // Actions
  @action
  onClick() {
    if (this.args.onClick && !this.args.disabled) {
      this.args.onClick();
    }
  }
}
