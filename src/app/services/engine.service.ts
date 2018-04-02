import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Engine, EngineInstance } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class EngineService implements OnDestroy{

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
  }

  getEngines(): Observable<Engine[]> {
    return this.http.get<Engine[]>(environment.api + '/engines'); // '/api/v1'
  }

  getEngineInstances(url: string): Observable<EngineInstance> {
    return this.http.get<EngineInstance>(url);
  }

}

/*
http://{{host}}/api/v1/engines
http://{{host}}/api/v1/engines/81
http://{{host}}/api/v1/engines/81/jobs
http://{{host}}/api/v1/engines/81/usage
http://{{host}}/api/v1/engines/81/jobs/49/tasks
http://{{host}}/api/v1/engines/81/jobs/50/tasks
http://{{host}}/api/v1/engines/81/jobs/47/tasks
http://{{host}}/api/v1/engines/81/jobs/48/tasks
http://{{host}}/api/v1/engines/81/statistic/RUNNING
http://{{host}}/api/v1/engines/81/statistic/FAILED
http://{{host}}/api/v1/engines/81/statistic/COMPLETED
http://{{host}}/api/v1/engines/instance/0f145ede-b7f1-4d59-b438-efee9c4ce7df"

*/
