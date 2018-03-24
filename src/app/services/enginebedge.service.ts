import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Engine } from '../model/engine';
import { Statistics } from '../model/statistics';
import { EngineInstance } from '../model/engine-instance';
import { Link } from '../model/link';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EnginebedgeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private enginesUrl = '/api/v1/engines/';
  results: Engine[];

  constructor(private http: Http) {
    this.results = [];
  }

  getEngineInstance(url: string): Observable<EngineInstance> {
    return this.http.get(url)
      .map(response => <EngineInstance>response.json())
  }

  getEngines(): Observable<Engine[]> {
    return this.http.get(this.enginesUrl)
      .map(response => {
        return response.json().map(engine => {
          return new Engine(engine.id, engine.name, engine.sealId, engine.createDate, engine.active, this.getStatistics(engine), this.getEngineLinks(engine));
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

}
