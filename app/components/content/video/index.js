import Component from '@glimmer/component';

export default class ContentVideoComponent extends Component {
  // Defaults
  blockName = 'c-content-video';


  // Getter and setter
  setupVideo(element) {
    element.controlls = false;
    element.muted = true;
  }
}
