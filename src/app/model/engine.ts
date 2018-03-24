export class Engine {

  public ENGINE_INSTANCE_REL = 'engine:instance';
  public statusLink: string;
  public engineInstance: EngineInstance[] = [];

  constructor(public id: string,
              public name: string,
              public sealId: string,
              public createdDate: Date,
              public active: boolean,
              public statistics: Statistics[],
              public links: Link[]) {
  }

  public getRunningJobCount() {
    let jobCount: number = 0;
    let value: Statistics[] = this.statistics
      .filter(status => status.statusCode === Statuscode[Statuscode.RUNNING]);
    if (value.length > 0) {
      jobCount = value[0].jobCount;
    }
    return jobCount;
  }

  public getFailedJobCount() {
    let jobCount: number = 0;
    let value: Statistics[] = this.statistics
      .filter(status => status.statusCode === Statuscode[Statuscode.FAILED]);
    if (value.length > 0) {
      jobCount = value[0].jobCount;
    }
    return jobCount;
  }

  public getCompletedJobCount() {
    let jobCount: number = 0;
    let value: Statistics[] = this.statistics
      .filter(status => status.statusCode === Statuscode[Statuscode.COMPLETED]);
    if (value.length > 0) {
      jobCount = value[0].jobCount;
    }
    return jobCount;
  }

  public numberOfInstance() {
    return this.engineInstanceLinks().length;
  }

  public engineInstanceLinks(): string[] {
    return this.links
      .filter(link => link.rel === Engine.ENGINE_INSTANCE_REL)
      .map(link => link.href);
  }

  public getFailedLink() {
    return '/api/v1/engines/' + this.id + '/statistic/' + Statuscode[Statuscode.FAILED];
  }

  public getRunningLink() {
    return '/api/v1/engines/' + this.id + '/statistic/' + Statuscode[Statuscode.RUNNING];
  }

  public getCompletedLink() {
    return '/api/v1/engines/' + this.id + '/statistic/' + Statuscode[Statuscode.COMPLETED];
  }

  public disabledCompletedButton(): boolean {
    return this.getCompletedJobCount() === 0;
  }

  public disabledRunningButton(): boolean {
    return this.getRunningJobCount() === 0;
  }

  public disabledFailedButton(): boolean {
    return this.getFailedJobCount() === 0;
  }
}

export class EngineInstance {
  constructor(public id: string,
              public cpuLoad: number,
              public createdDate: Date,
              public heapMemoryUsed: number,
              public lastUpdated: Date,
              public stoppedDate: Date,
              public hostName: string,
              public cloud: boolean) {
  }
}

export class Statistics {
  constructor(public jobCount: number, public statusCode: String) {
  }
}

export class Link {
  constructor(public rel: string, public href: string) {
  }
}

export enum Statuscode {
  RUNNING,
  COMPLETED,
  FAILED
}
