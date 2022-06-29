
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ContentCoverComponent extends Component {
  // Defaults
  blockName = 'c-content-cover';
  @tracked dateString = '';


  // Hooks
  constructor() {
    super(...arguments);

    const countDownDate = new Date("Jul 15, 2022 15:00:00").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.dateString = `${days} : ${hours} : ${minutes} : ${seconds}`;

      if (distance < 0) {
        clearInterval(x);
        this.dateString = '💒 👰 🎊 🎉 🍾 🍻';
      }
    }, 1000);
  }
}
