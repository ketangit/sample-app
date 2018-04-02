import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Engine, EngineInstance } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class EngineService implements OnDestroy{
  private dataChange: BehaviorSubject<Engine[]>;
  private subEngines: any;
  engines: Observable<Engine[]>;

  constructor(private http: HttpClient) {
    this.dataChange = new BehaviorSubject<Engine[]>([]);
    this.engines = this.dataChange.asObservable();    
  }
 
  ngOnDestroy() {
    if (this.subEngines) {
      this.subEngines.unsubscribe();
    }
    this.dataChange.unsubscribe();    
  }

  getEngineInstances(url: string): Observable<EngineInstance> {
    return this.http.get<EngineInstance>(url);
  }

  loadEngines(): void {
    // '/api/v1', environment.api
    this.subEngines = this.http.get<Engine[]>(environment.api + '/engines').subscribe( resultEngines => {
      resultEngines.map(engine => {
        const engineInstanceLinks = engine.links
          .filter(link => link.rel === 'engine:instance')
          .map(link => link.href);
          engine.engineInstances = new Array();
          engineInstanceLinks.map(url => {
            this.getEngineInstances(url).subscribe(resultInstance => {
              engine.engineInstances.push(resultInstance);
            });
          });
        });
      this.dataChange.next(resultEngines);
    }, (error: HttpErrorResponse) => { 
      console.log(error.name + ' ' + error.message);
    });
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
