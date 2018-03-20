import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Department } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(environment.api + '/departments');
  }
}
