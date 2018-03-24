export class Engine {

  public static ENGINE_INSTANCE_REL = 'engine:instance';
  public statusLink: string;
  public engineInstance: EngineInstance[] = [];

   id: string;
   name: string;
   appId: string;
   createdDate: Date;
   active: boolean;
   statistics: Statistics[];
   links: Link[];

  public getRunningJobCount() {
    let jobCount = 0;
    const value: Statistics[] = this.statistics
      .filter(status => status.statusCode === Statuscode[Statuscode.RUNNING]);
    if (value.length > 0) {
      jobCount = value[0].jobCount;
    }
    return jobCount;
  }

  public getFailedJobCount() {
    let jobCount = 0;
    const value: Statistics[] = this.statistics
      .filter(status => status.statusCode === Statuscode[Statuscode.FAILED]);
    if (value.length > 0) {
      jobCount = value[0].jobCount;
    }
    return jobCount;
  }

  public getCompletedJobCount() {
    let jobCount: number;
    jobCount = 0;
    const value: Statistics[] = this.statistics
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

export interface Statistics {
  jobCount: number;
  statusCode: String;
}

export interface Link {
  rel: string;
  href: string;
}

export enum Statuscode {
  RUNNING,
  COMPLETED,
  FAILED
}
