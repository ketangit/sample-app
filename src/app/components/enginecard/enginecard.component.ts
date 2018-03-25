import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Engine, Statistics, Statuscode } from '../../model';

@Component({
  selector: 'sample-enginecard',
  templateUrl: './enginecard.component.html',
  styleUrls: ['./enginecard.component.scss']
})
export class EnginecardComponent implements OnInit, OnDestroy {
  ENGINE_INSTANCE_REL = 'engine:instance';
  Statuscode = Statuscode; // Statuscode enum

  completedJobCount = 0;
  runningJobCount = 0;
  failedJobCount = 0;
  numberOfInstance = 0;

  @Input() engine: Engine;
  @Output() engineClickEvent: EventEmitter<Engine> = new EventEmitter<Engine>();
  @Output() engineStatusClickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.onLoad();
  }

  ngOnDestroy() {}

  disabledCompletedButton(): boolean {
    return this.completedJobCount === 0;
  }

  disabledRunningButton(): boolean {
    return this.runningJobCount === 0;
  }

  disabledFailedButton(): boolean {
    return this.failedJobCount === 0;
  }

  onEngineClick() {
    this.engineClickEvent.emit(this.engine);
  }

  onEngineStatusClick(statuscode: Statuscode) {
    this.engineStatusClickEvent.emit(this.engine.id + '/statistic/' + Statuscode[statuscode]);
  }

  private onLoad() {
    const completedValue: Statistics[] = this.engine.statistics.filter(
      status => status.statusCode === Statuscode[Statuscode.COMPLETED]
    );
    if (completedValue.length > 0) {
      this.completedJobCount = completedValue[0].jobCount;
    }

    const runningValue: Statistics[] = this.engine.statistics.filter(
      status => status.statusCode === Statuscode[Statuscode.RUNNING]
    );
    if (runningValue.length > 0) {
      this.runningJobCount = runningValue[0].jobCount;
    }

    const failedValue: Statistics[] = this.engine.statistics.filter(
      status => status.statusCode === Statuscode[Statuscode.FAILED]
    );
    if (failedValue.length > 0) {
      this.failedJobCount = failedValue[0].jobCount;
    }

    // TODO populate EngineInstance -> engine.engineInstances array by using links below
    const engineInstanceLinks = this.engine.links
      .filter(link => link.rel === this.ENGINE_INSTANCE_REL)
      .map(link => link.href);
    this.numberOfInstance = engineInstanceLinks.length;
  }
}
