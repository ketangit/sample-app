import {Engine} from './engine';
import {Node} from 'vis';

export class Job implements Node {
  public tasks: Task[];

  constructor(public id: number,
              public name: string,
              public version: number,
              public disable: boolean,
              public createDate: Date,
              public description: string,
              public engine: Engine) {
  }
}

export class TaskDetail {

  constructor(public id: number,
              public title: string,
              public name: string,
              public className: string,
              public size: number,
              public sequence: number,
              public disable: boolean,
              public createDate: Date,
              public parameters: Parameter[],
              public version: number,
              public description: string) {
  }
}

export class Task {
  public DONE_TASK: 'DoneTask';

  constructor(public id: number,
              public name: string,
              public className: string,
              public size: number,
              public sequence: number,
              public disable: boolean,
              public createDate: Date,
              public job: Job,
              public immediateParentTaskId: number,
              public parameters: Parameter[]) {
  }
}

export class Parameter {
  constructor(public id: number,
              public key: string,
              public value: string,
              public type: string) {
  }
}

export class LoggerMessage {

  constructor(public id: number,
              public taskId: number,
              public executionId: number,
              public rootExecutionId: number,
              public executionTime: Date,
              public message: string,
              public messageType: string) {
  }
}
