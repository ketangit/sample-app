import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { ProductService } from '../../services';

@Component({
  selector: 'sample-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit, OnDestroy {
  gridApi: any[];
  gridColumnApi: any[];
  columnDefs: any[];

  constructor(private productService: ProductService) {
    this.columnDefs = [
      { headerName: 'Athlete', field: 'athlete', width: 150 },
      { headerName: 'Age', field: 'age', width: 90 },
      { headerName: 'Country', field: 'country', width: 120 },
      { headerName: 'Year', field: 'year', width: 90 },
      { headerName: 'Date', field: 'date', width: 110 },
      { headerName: 'Sport', field: 'sport', width: 110 },
      { headerName: 'Gold', field: 'gold', width: 100 },
      { headerName: 'Silver', field: 'silver', width: 100 },
      { headerName: 'Bronze', field: 'bronze', width: 100 },
      { headerName: 'Total', field: 'total', width: 100 }
    ];
  }

  ngOnInit() {}

  ngOnDestroy() {}

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.productService.getProducts().subscribe(data => {
      params.api.setRowData(data);
    });
    params.api.sizeColumnsToFit();
  }
}
