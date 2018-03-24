import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TagService, EngineService } from '../../services';
import { Engine } from '../../model';

@Component({
  selector: 'sample-tag-list',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagsComponent implements OnInit, OnDestroy {
  tags: string[];
  sub: any;
  subEngine: any;
  engines: Engine[];

  constructor(private tagService: TagService , private engineService: EngineService) {}

  ngOnInit() {
    this.sub = this.tagService.getTags().subscribe(tags => (this.tags = tags));
    this.subEngine = this.engineService.getEngines().subscribe(engns => (this.engines = engns));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.subEngine) {
      this.subEngine.unsubscribe();
    }
  }
}
