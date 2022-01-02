import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContentGalleryComponent extends Component {
  // Defaults
  blockName = 'c-content-gallery';
  numImages = 196;
  imageArray = [...Array(this.numImages).keys()];
  @tracked selectedImage;


  // Getter and setter
  get isFirst() {
    return this.selectedImage === 0;
  }

  get isLast() {
    return this.selectedImage === this.numImages;
  }

  // Actions
  @action
  selectImage(number) {
    this.selectedImage = number;
  }

  @action
  nextImage() {
    this.selectedImage++;
  }

  @action
  prevImage() {
    this.selectedImage--;
  }
}
