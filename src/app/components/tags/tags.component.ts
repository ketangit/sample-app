import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TagService } from '../../services'

@Component({
  selector: 'tag-list',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagsComponent implements OnInit, OnDestroy {
  tags: string[];
  sub: any;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.sub = this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }
}