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
  subEngines: any;

  constructor(private router: Router, private engineService: EngineService) { }

  ngOnInit() {
    this.subEngines = this.engineService.getEngines().subscribe(valuesEngines => {
      valuesEngines.map(engine => {
        const engineInstanceLinks = engine.links
          .filter(link => link.rel === 'engine:instance')
          .map(link => link.href);
        engine.engineInstances = new Array();
        engineInstanceLinks.map(url => {
          this.engineService.getEngineInstances(url).subscribe(valuesInstance => {
            engine.engineInstances.push(valuesInstance);
          });
        });
        this.engines = valuesEngines;
      });
    });
  }

  ngOnDestroy() {
    if (this.subEngines) {
      this.subEngines.unsubscribe();
    }
  }

  onEngineClickEvent(engine: Engine) {
    this.router.navigateByUrl('/network/' + engine.id);
  }

  onEngineStatusClickEvent(statisticLink: string) {
    console.log('show all details for - ' + statisticLink);
  }
}
