import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TagService {

  private _serviceUrl: string = 'http://localhost:3000/tagList';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(this._serviceUrl);
  }
}
