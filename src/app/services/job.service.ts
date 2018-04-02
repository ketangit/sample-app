import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Job, Task } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class JobService {
  constructor(private http: HttpClient) {}

  getJobs(url: string): Observable<Job[]> {
    return this.http.get<Job[]>(url);
  }

  getTasks(url: string): Observable<Task[]> {
    return this.http.get<Task[]>(url);
  }
}
