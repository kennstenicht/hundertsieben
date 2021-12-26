import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppService extends Service {
  // Defaults
  @tracked mode = 'love';


  // Getter and setter
  get isModeLove() {
    return this.mode === 'love';
  }

  get isModeFun() {
    return this.mode === 'fun';
  }


  // Actions
  @action
  toggleMode() {
    this.mode = this.mode === 'love' ? 'fun' : 'love';
  }
}