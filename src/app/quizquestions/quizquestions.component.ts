import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { test123 } from './test123';
@Component({
  selector: 'app-quizquestions',
  templateUrl: './quizquestions.component.html',
  styleUrls: ['./quizquestions.component.css']
})
export class QuizquestionsComponent {

  questions: any;
  currentIndex: number;
  notAttempted: any;
  correct: any;
  currentQuestionSet: any;
  start = true;
  gameover = false;
  correctAnswers: Array<any> = [];
  buttonname = "Play";
  submitOrNot: boolean = false;
  constructor(private router: Router) {

    //Creating summy questions Json dta
    this.questions = [
      {
        id: 1,
        question: 'How can I help someone if they are on drugs?',
        option: [
          { optionid: 1, name: 'Hand them over to the authorities ' },
          { optionid: 2, name: 'Support them in overcoming addiction' },
          { optionid: 3, name: 'Inform to their family members' },
          { optionid: 4, name: 'Blackmail them into stop doing it' }
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 2,
        question: 'Signs of addiction',
        option: [
          { optionid: 1, name: ' Depression or eating disorders.' },
          { optionid: 2, name: 'Searching for affection' },
          { optionid: 3, name: 'Night out with friends' },

        ],
        answer: 1,
        selected: 0
      },
      {
        id: 3,
        question: 'Most suitable tip for Recovery',
        option: [
          { optionid: 1, name: ' Remind yourself that having an addiction doesn not make a person bad or weak' },
          { optionid: 2, name: 'Accept invitations only to events that you know will not involve drugs or alcohol' },
          { optionid: 3, name: 'Tell your friends about your decision to stop using drugs' },
          { optionid: 4, name: 'Ask your friends or family to be available' }
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 4,
        question: 'Select the best way to stay clean and sober',
        option: [
          { optionid: 1, name: 'Meet healthier, sober people' },
          { optionid: 2, name: 'Eat food for the drug cravings' },
          { optionid: 3, name: 'Play video games' },
          { optionid: 4, name: 'Spend time alone' }
        ],
        answer: 1,
        selected: 0
      }
    ];


    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

  returnCorrectAnswers() {
    this.questions.forEach(availableQuestion => {
      availableQuestion.option.forEach(availableOption => {
        if (availableOption.optionid == availableQuestion.answer) {
          this.correctAnswers.push(availableOption.name);
          console.log(this.correctAnswers);
        }
      });
    });
  }

  next() {
    this.currentIndex = this.currentIndex + 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }
  submit() {
    this.buttonname = "Replay";
    this.submitOrNot = true;
    this.returnCorrectAnswers();
    if (this.currentIndex + 1 == this.questions.length) {
      this.gameover = true;
      this.start = false;
      this.correct = 0;
      this.notAttempted = 0;
      this.questions.map(x => {
        if (x.selected != 0) {
          if (x.selected == x.answer)
            this.correct = this.correct + 1;
        }
        else {
          this.notAttempted = this.notAttempted + 1;
        }
        x.selected = 0;
      });
    }
   
  }


  startQuiz() {
    this.gameover = false;
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
    this.start = true;
  }
  back() {
    this.router.navigateByUrl("/startquiz");
  }
}


