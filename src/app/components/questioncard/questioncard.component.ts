import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../../model';
import { QuestionService } from '../../services';

@Component({
  selector: 'sample-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.scss']
})
export class QuestioncardComponent implements OnInit, OnDestroy {
  questions?: Question[];
  subQuestions: any;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.subQuestions = this.questionService.getQuestions().subscribe(values => (this.questions = values));
  }

  ngOnDestroy() {
    if (this.subQuestions) {
      this.subQuestions.unsubscribe();
    }
  }
}
