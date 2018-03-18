import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Question } from '../../model';
import { QuestionService } from '../../services';

@Component({
  selector: 'sample-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  questions: Question[];
  sub: any;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.sub = this.questionService
      .getQuestions()
      .subscribe(questions => (this.questions = questions));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
