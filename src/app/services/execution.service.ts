import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Execution } from '../model/execution';
import { Status } from '../model/status';

@Injectable()
export class ExecutionService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  public executions: Execution[];

  constructor(private http: Http) {
  }


  getExecutionList(link: string): Observable<Execution[]> {
    return this.http.get(link)
      .map(response => <Execution[]>response.json())
      .catch(this.handleError);

  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


