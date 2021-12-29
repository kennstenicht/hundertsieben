

import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class IsModeHelper extends Helper {
  // Sevices
  @service app;


  // Hooks
  compute([mode]) {
    return this.app.mode === mode;
  }
}

