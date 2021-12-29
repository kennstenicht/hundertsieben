import Helper from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';
import { restartableTask, timeout } from 'ember-concurrency';

export default class LastnameHelper extends Helper {
  // Defaults
  @tracked name = '';
  currentOption = 0;
  currentLetter = 0;
  isReverse = false;


  // Hooks
  compute(options) {
    this.testTask.perform(options);

    return this.name;
  }


  // Tasks
  @restartableTask
  *testTask(options) {
    let currentName = options[this.currentOption];
    let reversePoint = currentName.length + 5;

    yield timeout(this.isReverse ? 50 : 200);

    if (this.isReverse) {
      this.currentLetter--;
    } else {
      this.currentLetter++;
    }

    if (this.currentLetter === reversePoint || this.currentLetter === 0) {
      this.isReverse = !this.isReverse;
    }

    if (this.currentLetter === 0) {
      this.currentOption ^= 1;
    }

    this.name = currentName.substring(0, this.currentLetter);
  }
}

