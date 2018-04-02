import { Engine, Link } from './engine';
import { Node } from 'vis';

export class Job implements Node {
  id: number;
  name: string;
  version: number;
  disable: boolean;
  createDate?: Date;
  description: string;
  engine?: Engine;
  tasks?: Task[];
  links?: Link[];
}

export interface Task {
  id: number;
  immediateParentTaskId: number;
  title: string;
  name: string;
  className: string;
  size: number;
  sequence: number;
  disable: boolean;
  createDate?: Date;
  version: number;
  description: string;
  job?: Job;
  parameters?: Parameter[];
}

export interface Parameter {
  id: number;
  key: string;
  value: string;
  type: string;
}

export interface LoggerMessage {
  id: number;
  taskId: number;
  executionId: number;
  rootExecutionId: number;
  executionTime?: Date;
  message: string;
  messageType: string;
}
