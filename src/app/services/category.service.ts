import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Category } from '../model/category';

@Injectable()
export class CategoryService {

  private _serviceUrl: string = 'http://localhost:3000/categories';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this._serviceUrl);
  }
}
