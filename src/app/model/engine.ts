export interface Engine {
  id: string;
  name: string;
  appId: string;
  orgName: string;
  createdDate?: Date;
  active: boolean;
  statistics?: Statistics[];
  links?: Link[];
  engineInstances?: EngineInstance[];
}

export interface EngineInstance {
  id: string;
  cpuLoad: number;
  createdDate?: Date;
  heapMemoryUsed: number;
  lastUpdated?: Date;
  stoppedDate?: Date;
  hostName: string;
  cloud: boolean;
}

export interface Statistics {
  jobCount: number;
  statusCode: string;
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
