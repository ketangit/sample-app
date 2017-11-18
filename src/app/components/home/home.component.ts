import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Question } from '../../model';
import { QuestionService } from '../../services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  questions: Question[];
  sub: any;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.sub = this.questionService.getQuestions().subscribe(questions => this.questions = questions);
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }
}