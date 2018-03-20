import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../../services';
import { DataSource } from '@angular/cdk/collections';
import { Department } from '../../model';

@Component({
  selector: 'sample-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit, OnDestroy {
  dataSource = new DepartmentDataSource(this.productService);
  displayedColumns = ['name', 'groupName', 'markup', 'salesTax', 'date'];

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  addNew() {}

  deleteItem(i: number) {}

  editItem(i: number) {}
}

export class DepartmentDataSource extends DataSource<Department> {
  constructor(private productService: ProductService) {
    super();
  }
  connect(): Observable<Department[]> {
    return this.productService.getDepartments();
  }
  disconnect() {}
}
