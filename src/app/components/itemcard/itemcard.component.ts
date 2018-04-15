import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../model';

@Component({
  selector: 'sample-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss']
})
export class ItemcardComponent implements OnInit, OnDestroy {
  @Input() item: Item;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
