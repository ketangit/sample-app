import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { DataSource } from '@angular/cdk/collections';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';

import { ProductService } from '../../services';
import { Department } from '../../model';

@Component({
  selector: 'sample-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ProductComponent implements OnInit, OnDestroy {
  dataSource: DepartmentDataSource | null;
  displayedColumns = ['name', 'groupName', 'markup', 'salesTax', 'numSubDepts', 'numItems', 'date'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {}

  public loadData() {
    this.dataSource = new DepartmentDataSource(this.productService, this.paginator, this.sort);

    // Observable for the filter
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  addNewItem() {}

  deleteItem(i: number) {}

  editItem(i: number) {}
}

export class DepartmentDataSource extends DataSource<Department> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Department[] = [];
  renderedData: Department[] = [];

  constructor(private productService: ProductService, private _paginator: MatPaginator, private _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => (this._paginator.pageIndex = 0));
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Department[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.productService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this.productService.getAllDepartments();
    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this.productService.data.slice().filter((department: Department) => {
        const searchStr = (
          department.name +
          department.groupName +
          department.markup +
          department.salesTax
        ).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  sortData(data: Department[]): Department[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'groupName':
          [propertyA, propertyB] = [a.groupName, b.groupName];
          break;
        case 'markup':
          [propertyA, propertyB] = [a.markup, b.markup];
          break;
        case 'salesTax':
          [propertyA, propertyB] = [a.salesTax, b.salesTax];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
