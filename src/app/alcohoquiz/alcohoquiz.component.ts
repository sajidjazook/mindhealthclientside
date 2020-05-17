import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-alcohoquiz',
  templateUrl: './alcohoquiz.component.html',
  styleUrls: ['./alcohoquiz.component.css']
})
export class AlcohoquizComponent  {

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
        question: 'Factors contributing to the difficulty in measuring drug-crime relationships, include all except:',
        option: [
          { optionid: 1, name: 'cultural factors' },
          { optionid: 2, name: 'psychological factors' },
          { optionid: 3, name: 'situational factors' },
          { optionid: 4, name: 'personal factors' }
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 2,
        question: 'Why do some people become addicted, while others don’t?',
        option: [
          { optionid: 1, name: 'Environmental Factors, Genetics' },
          { optionid: 2, name: 'Age, Birth Area' },
          { optionid: 3, name: 'Health, Stress' },

        ],
        answer: 1,
        selected: 0
      },
      {
        id: 3,
        question: 'The term ADHD stands for',
        option: [
          { optionid: 1, name: 'attention-deficit/hypertension disorder' },
          { optionid: 2, name: 'attention-deficit/hyperactivity disorder' },
          { optionid: 3, name: 'attention-deficit/hypoglycemia disorder' },
          { optionid: 4, name: 'attention-deficit/hyper dysfunction' }
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 4,
        question: 'Which neurotransmitter is responsible in the brains reward center? ',
        option: [
          { optionid: 1, name: 'Dopamine' },
          { optionid: 2, name: 'Oxytocins' },
          { optionid: 3, name: 'serotonin' },
          { optionid: 4, name: 'norepinephrine' }
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