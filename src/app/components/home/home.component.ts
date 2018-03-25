import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Question, Engine } from '../../model';
import { QuestionService, EngineService } from '../../services';

@Component({
  selector: 'sample-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  questions?: Question[];
  sub: any;
  subEngine: any;
  engines?: Engine[];

  constructor(private questionService: QuestionService, private engineService: EngineService) {}

  ngOnInit() {
    this.sub = this.questionService.getQuestions().subscribe(questions => (this.questions = questions));
    this.subEngine = this.engineService.getEngines().subscribe(engines => (this.engines = engines));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.subEngine) {
      this.subEngine.unsubscribe();
    }
  }

  onEngineClickEvent(engine: Engine) {
    console.log('show detrails for engine - ' + engine.name);
  }

  onEngineStatusClickEvent(statisticLink: string) {
    console.log('show all details for - ' + statisticLink);
  }
}
