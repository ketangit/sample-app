import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Job , Engine, Task} from '../model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  public jobs: Job[];

  constructor(private http: Http) {
  }

  getJobDetails(engine: Engine): Observable<Job[]> {
    const jobdeailUrl = '/api/v1/engines/' + engine.id + '/jobs';
    return Observable.of([]);
    /*
    return this.http.get(jobdeailUrl)
      .map(response => <Job[]>response.json())
      .flatMap((jobs: Job[]) => {
        if (jobs.length > 0) {
          return Observable.forkJoin(
            jobs.map(job => {
              const taskapiUrl = '/api/v1/engines/' + engine.id + '/jobs/' + job.id + '/tasks';
              return this.http.get(taskapiUrl)
                .map(response => {
                  const tasks: Task[] = <Task[]>response.json()._embedded.tasks;
                  job.tasks = tasks;
                  return job;
                });
            })
          );
        }
        return Observable.of([]);
      });
      */
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
