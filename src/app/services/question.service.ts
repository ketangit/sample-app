import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Question, Category } from '../model';
import { CategoryService } from './category.service';
import { environment } from '../../environments/environment';

@Injectable()
export class QuestionService {
  constructor(private http: Http, private categoryService: CategoryService) {}

  getQuestions(): Observable<Question[]> {
    return forkJoin(
      this.http
        .get(environment.api + '/questions')
        .map<any, Question[]>(res => res.json()),
      this.categoryService.getCategories()
    ).map((combined, index) => {
      const questions: Question[] = combined[0];
      const categories: Category[] = combined[1];
      questions.forEach(q => {
        q.categories = [];
        q.categoryIds.forEach(id =>
          q.categories.push(categories.find(element => element.id === id))
        );
      });
      return questions;
    });
  }

  saveQuestion(question: Question): Observable<Question> {
    return this.http
      .post(environment.api + '/questions', question)
      .map(res => res.json());
  }
}
