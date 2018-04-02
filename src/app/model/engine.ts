export interface Engine {
  id: string;
  name: string;
  appId: string;
  orgName: string;
  createDate?: Date;
  active: boolean;
  statistics?: Statistics[];
  links?: Link[];
  engineInstances?: EngineInstance[];  
}

export interface EngineInstance {
  id: string;
  hostName: string;
  environment: string;
  orgName?: string;
  apiUrl?: string;
  cloud: boolean;
  heapMemoryUse?: number;
  cpuLoad?: number;
  createDate?: Date;
  lastUpdated?: Date;
  stoppedDate?: Date;
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
