import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContentSliderComponent extends Component {
  // Defaults
  blockName = 'c-content-slider';
  @tracked activeSlide = 0;


  // Functions
  @action
  nextSlide() {
    if (this.activeSlide < this.args.images.length - 1) {
      this.activeSlide++;
    } else {
      this.activeSlide = 0;
    }

    setTimeout(this.nextSlide, 3000);
  }
}
