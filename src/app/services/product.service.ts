import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(
      'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json'
    );
  }
}
