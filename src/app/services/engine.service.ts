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
