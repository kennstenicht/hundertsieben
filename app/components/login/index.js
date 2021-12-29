import Component from '@glimmer/component';
import { tracked, TrackedSet } from 'tracked-built-ins';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

export default class ApplicationFooterComponent extends Component {
  // Services
  @service app;
  @service router;


  // Defaults
  @tracked answer = '';
  blockName = 'c-login';
  @tracked errorMessage = '';
  @tracked randomQuestion = '';
  questionHistory = new TrackedSet();
  questions = [
    {
      answers: ['Johannes', 'johannes'],
      image: '/assets/login/christoph.jpg',
      question: 'Wie lautet der zweite Vorname des Bräutigam?',
      type: 'text',
      wrongAnswerMessage: 'Das ist leider falsch. Hast du dich evtl. vertippt?'
    },
    {
      question: 'Wann ist die Braut oder der Bräutigam geboren?',
      image: '/assets/login/wir.jpg',
      answers: ['1988-09-02', '1986-04-07'],
      type: 'date',
      wrongAnswerMessage: 'Das ist leider falsch, schau mal in dein Kalender!'
    },
    {
      question: 'In welchem Land wurder der Hochzeitsantrag gestellt?',
      image: '/assets/login/antrag.jpg',
      answers: ['Dänemark', 'dänemark'],
      type: 'text',
      wrongAnswerMessage: 'Das ist leider falsch, kleiner Tipp, es war auf dem Weg nach Koppenhagen.'
    },
    {
      question: 'Wo haben wir zum ersten Mal geheiratet?',
      answers: ['Fusion', 'fusion', 'Fusion Festival', 'fusion festival', 'Telefonzelle', 'telefonzelle', 'Hochzeitstelefonzelle', 'hochzeitstelefonzelle', 'Hochzeits-Telefonzelle', 'hochzeits-telefonzelle'],
      image: '/assets/login/hochzeit.jpg',
      type: 'text',
      wrongAnswerMessage: 'Das ist leider falsch, aber wir können auch nicht gewährleisten das wir nicht einen vergessen haben.'
    }
  ];


  // Constructor
  constructor() {
    super(...arguments);

    next(() => {
      this.randomQuestion = this._getRandomQuestion();
    })
  }


  // Getter and setter
  get hasMoreQuestions() {
    return this.questionHistory.size < this.questions.length;
  }


  // Actions
  @action
  newQuestion() {
    this.randomQuestion = this._getRandomQuestion();
  }

  @action
  signIn() {
    if (this.randomQuestion.answers.includes(this.answer)) {
      this.app.isPasswordCorrect = true;
      this.router.transitionTo('home');
      this.errorMessage = '';
    } else {
      this.errorMessage = this.randomQuestion.wrongAnswerMessage;
    }
  }


  // Functions
  _getRandomQuestion() {
    let index = this._getRandomInt(0, 4);

    if (!this.hasMoreQuestions) {
      return
    }

    if (this.questionHistory.has(index)) {
      return this._getRandomQuestion();
    }

    this.questionHistory.add(index);
    return this.questions[index];
  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }
}
