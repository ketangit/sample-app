import { Component, OnInit, OnDestroy } from '@angular/core';
import { EngineService } from '../../services';
import { Engine } from '../../model';

@Component({
  selector: 'sample-enginelist',
  templateUrl: './enginelist.component.html',
  styleUrls: ['./enginelist.component.scss']
})
export class EnginelistComponent implements OnInit, OnDestroy {
  engines?: Engine[];
  subEngines: any;

  constructor(private engineService: EngineService) {}

  ngOnInit() {
    this.subEngines = this.engineService.getEngines().subscribe(values => (this.engines = values));
  }

  ngOnDestroy() {
    if (this.subEngines) {
      this.subEngines.unsubscribe();
    }
  }

  onEngineClickEvent(engine: Engine) {
    console.log('show detrails for engine - ' + engine.name);
  }

  onEngineStatusClickEvent(statisticLink: string) {
    console.log('show all details for - ' + statisticLink);
  }
}
