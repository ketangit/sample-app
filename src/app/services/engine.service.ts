import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Engine } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class EngineService {
  constructor(private http: HttpClient) {}

  getEngines(): Observable<Engine[]> {
    return this.http.get<Engine[]>(environment.api + '/engines');
  }
}

/*
http://{{host}}/api/v1/engines
http://{{host}}/api/v1/engines/81/jobs
http://{{host}}/api/v1/engines/81/jobs/49/tasks
http://{{host}}/api/v1/engines/81/jobs/50/tasks
http://{{host}}/api/v1/engines/81/jobs/47/tasks
http://{{host}}/api/v1/engines/81/jobs/48/tasks
http://{{host}}/api/v1/engines/81/statistic/RUNNING
http://{{host}}/api/v1/engines/81/statistic/FAILED
http://{{host}}/api/v1/engines/81/statistic/COMPLETED
*/
