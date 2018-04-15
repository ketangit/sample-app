import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Department, Item } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {
  dataChange: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>([]);

  constructor(private http: HttpClient) {}

  get data(): Department[] {
    return this.dataChange.value;
  }

  getAllDepartments(): void {
    this.http.get<Department[]>(environment.api + '/departments').subscribe(
      data => { this.dataChange.next(data); },
      (error: HttpErrorResponse) => { console.log(error.name + ' ' + error.message); }
    );
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.api + '/items?deptId=12');
  }
}
