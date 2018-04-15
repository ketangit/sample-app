import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Question, Item } from '../../model';
import { QuestionService, ProductService } from '../../services';

@Component({
  selector: 'sample-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.scss']
})
export class QuestioncardComponent implements OnInit, OnDestroy {
  questions?: Question[];
  subQuestions: any;

  items?: Item[];
  subItems: any;

  constructor(private questionService: QuestionService, private productService: ProductService) {}

  ngOnInit() {
    this.subQuestions = this.questionService.getQuestions().subscribe(values => (this.questions = values));
    this.subItems = this.productService.getItems().subscribe(values => (this.items = values));
  }

  ngOnDestroy() {
    if (this.subQuestions) {
      this.subQuestions.unsubscribe();
    }
    if (this.subItems) {
      this.subItems.unsubscribe();
    }
  }
}
