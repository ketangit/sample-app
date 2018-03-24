import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Engine, Statistics, Link, EngineInstance } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class EngineService {
  constructor(private http: HttpClient) {}

  getEngines(): Observable<Engine[]> {
    return this.http.get<Engine[]>(environment.api + '/engines');
  }
/*
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private enginesUrl = '/engines/';
  results: Engine[];

  constructor(private http: Http) {
    this.results = [];
  }

  getEngineInstance(url: string): Observable<EngineInstance> {
    return this.http.get(url)
      .map(response => <EngineInstance>response.json());
  }

  getEngines(): Observable<Engine[]> {
    return this.http.get(this.enginesUrl)
      .map(response => {
        return response.json().map(engine => {
          return new Engine(engine.id, engine.name, engine.sealId,
            engine.createDate, engine.active, this.getStatistics(engine),
            this.getEngineLinks(engine));
        });
      });
  }

  private getStatistics(engine: any): Statistics[] {
    return engine.statistics.map(statistic => {
      return new Statistics(statistic.jobCount, statistic.statusCode);
    });
  }

  private getEngineLinks(engine: any): Link[] {
    return engine.links.map(link => {
      return new Link(link.rel, link.href);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
*/
}
