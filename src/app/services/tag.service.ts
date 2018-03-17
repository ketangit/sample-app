import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class TagService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(environment.api + '/tagList');
  }
}
