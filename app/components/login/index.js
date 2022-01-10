import Component from '@glimmer/component';
import { tracked, TrackedSet } from 'tracked-built-ins';
import { action } from '@ember/object';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

export default class ApplicationFooterComponent extends Component {
  // Services
  @service app;
  @service router;


  // Defaults
  @tracked answer = '';
  blockName = 'c-login';
  @tracked showError = false;
  @tracked randomQuestionIndex = 7;
  questionHistory = new TrackedSet([7]);


  // Constructor
  constructor() {
    super(...arguments);
  }


  // Getter and setter
  get hasMoreQuestions() {
    return this.questionHistory.size < this.questions.length;
  }

  get noAnswer() {
    return this.answer.length < 1;
  }

  get questions() {
    return [
      {
        answers: ['Johannes', 'johannes'],
        image: '/assets/login/christoph.jpg',
        question: 'Wie ist der zweite Vorname des Bräutigams?',
        type: 'text',
        wrongAnswerMessage: `${this.answer} ist leider falsch. Hast du dich evtl. vertippt?`
      },
      {
        question: 'Wann hat die Braut Geburtstag?',
        image: '/assets/login/sevi_birthday.jpg',
        answers: ['07.04.1986', '07. 04. 1986', '07.04.86', '7.4.1986', '7.4.86', '7. April 1986', '7. April 86', '7 April 1986', '7 April 86', '7. Apr. 1986', '7 Apr 1986', '1986-04-07'],
        type: 'text',
        wrongAnswerMessage: 'Schau mal in dein Kalender, das ist schon ein bisschen peinlich.'
      },
      {
        question: 'Wann hat der Bräutigam Geburtstag?',
        image: '/assets/login/christoph_birthday.jpg',
        answers: ['02.09.1988', '02. 09. 1988', '02.09.88', '2.9.1988', '2.9.88', '2. September 1988', '2. September 88', '2 September 1988', '2 September 88', '2. Sep. 1988', '2 Sep 1988', '1988-09-02'],
        type: 'text',
        wrongAnswerMessage: 'Schau mal in dein Kalender, das ist schon ein bisschen peinlich!'
      },
      {
        question: 'In welchem Land wurde der Antrag gemacht?',
        image: '/assets/login/antrag.jpg',
        answers: ['Dänemark', 'dänemark'],
        type: 'text',
        wrongAnswerMessage: `${this.answer} ist leider falsch... Kleiner Tipp, es war auf unsere Radtour nach Kopenhagen.`
      },
      {
        question: 'Was ist besser als 100',
        image: '/assets/login/hundertsieben.jpg',
        answers: ['107', '107', 'Hundertsieben', 'hundertsieben', 'hundert sieben', '107%', '107 %'],
        type: 'text',
        wrongAnswerMessage: `Warum sollte ${this.answer} besser als 100 sein?`
      },
      {
        question: 'In welchem Bezirk wohnt das Brautpaar?',
        image: '/assets/login/neukoelln.jpg',
        answers: ['Neukölln', 'neukölln', 'neuköln', 'Neuköln', 'Berlin Neukölln', 'Berlin-Neukölln'],
        type: 'text',
        wrongAnswerMessage: `Wie bitte!? Wir wohnen im zwar im Ghetto aber bestimmt nicht in ${this.answer}.`
      },
      {
        question: 'Nenne einen der Trauzeugen',
        image: '/assets/login/trauzeugen.jpg',
        answers: ['Fabian', 'fabian', 'Fabi', 'fabi', 'Fabian-Alexander', 'Fabian Wirths', 'fabian wirths', 'Fabian Alexander Wirths', 'Pascal', 'pascla', 'Pasci', 'pasci', 'Pascal Sarközi', 'pascal sarközi'],
        type: 'text',
        wrongAnswerMessage: 'Es gibt nur zwei, so schwer kann es nicht sein.'
      },
      {
        question: 'Wo hat das Brautpaar zum ersten Mal geheiratet?',
        answers: ['Fusion', 'fusion', 'Fusion Festival', 'fusion festival', 'Telefonzelle', 'telefonzelle', 'Hochzeitstelefonzelle', 'hochzeitstelefonzelle', 'Hochzeits-Telefonzelle', 'hochzeits-telefonzelle'],
        image: '/assets/login/hochzeit.jpg',
        type: 'text',
        wrongAnswerMessage: 'Utz, utz, utz... The Question is What is the Question?'
      },
      {
        question: 'Nenne einen Spitznamen der Braut',
        answers: ['Sevi', 'sevi', 'Sippel', 'sippel', 'Sippel7', 'sippel7', 'Schwippo', 'schwippo', 'Suip', 'suip', 'Ziege', 'ziege'],
        image: '/assets/login/sevi_bike.jpg',
        type: 'text',
        wrongAnswerMessage: `Du nennst die Braut evtl. ${this.answer}, aber uns ist der Spitzname nicht bekannt.`
      }
    ];
  }

  get randomQuestion() {
    return this.questions[this.randomQuestionIndex];
  }

  // Actions
  @action
  updateAnswer(event) {
    this.answer = event.target.value;
    this.showError = false;
  }

  @action
  newQuestion() {
    this.randomQuestionIndex = this._getRandomQuestionIndex();
    this.answer = '';
    this.showError = false;
  }

  @action
  signIn() {
    if (this.randomQuestion.answers.includes(this.answer.trim())) {
      this.app.isPasswordCorrect = true;
      this.router.transitionTo('home');
    } else {
      this.showError = true;
    }
  }

  @action
  startOver() {
    this.questionHistory = new TrackedSet();
    this.newQuestion();
  }


  // Functions
  _getRandomQuestionIndex() {
    let index = this._getRandomInt(0, this.questions.length);

    if (!this.hasMoreQuestions) {
      return
    }

    if (this.questionHistory.has(index)) {
      return this._getRandomQuestionIndex();
    }

    this.questionHistory.add(index);
    return index;
  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }
}
