import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { EngineService } from '../../services';
import { Engine } from '../../model';

@Component({
  selector: 'sample-enginelist',
  templateUrl: './enginelist.component.html',
  styleUrls: ['./enginelist.component.scss']
})
export class EnginelistComponent implements OnInit, OnDestroy {
  engines?: Engine[];
  private subEngines: any;

  constructor(private router: Router, private engineService: EngineService) {}

  ngOnInit() {
    this.engineService.loadEngines();
    this.subEngines = this.engineService.engines.subscribe(data => {
      this.engines = data;
    });
  }

  ngOnDestroy() {
    if (this.subEngines) {
      this.subEngines.unsubscribe();
    }
  }

  onEngineClickEvent(engine: Engine) {
    this.router.navigateByUrl('/network');
  }

  onEngineStatusClickEvent(statisticLink: string) {
    console.log('show all details for - ' + statisticLink);
  }
}
