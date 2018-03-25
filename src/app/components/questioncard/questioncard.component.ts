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
  sub: any;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.sub = this.questionService.getQuestions().subscribe(questions => (this.questions = questions));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
