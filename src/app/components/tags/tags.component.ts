import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TagService } from '../../services';

@Component({
  selector: 'sample-tag-list',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {
  tags: string[];
  subTags: any;

  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.subTags = this.tagService.getTags().subscribe(values => (this.tags = values));
  }

  ngOnDestroy() {
    if (this.subTags) {
      this.subTags.unsubscribe();
    }
  }
}
