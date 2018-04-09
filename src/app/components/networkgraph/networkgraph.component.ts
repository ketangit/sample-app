import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Network, DataSet, Node, Edge, IdType } from 'vis';

@Component({
  selector: 'sample-network-graph',
  templateUrl: './networkgraph.component.html',
  styleUrls: ['./networkgraph.component.scss']
})
export class NetworkGraphComponent implements OnInit, OnDestroy {
  nodes;
  edges;
  network?: Network;

  constructor() {}

  ngOnInit() {
    // get Unicode from http://zavoloklom.github.io/material-design-iconic-font/icons.html
    const optionGroups = {
      engine: {
        shape: 'icon',
        icon: {
          face: 'Material-Design-Iconic-Font',
          code: '\uf3d7',
          size: 50,
          color: '#109618'
        }
      }, // green
      job: {
        shape: 'icon',
        icon: {
          face: 'Material-Design-Iconic-Font',
          code: '\uf3dc',
          size: 50,
          color: '#5A1E5C'
        }
      }, // purple
      task: {
        shape: 'icon',
        icon: {
          face: 'Material-Design-Iconic-Font',
          code: '\uf16e',
          size: 50,
          color: '#2B7CE9'
        }
      }, // blue
      done: {
        shape: 'icon',
        icon: {
          face: 'Material-Design-Iconic-Font',
          code: '\uf3b6',
          size: 50,
          color: '#FF9900'
        }
      } // orange
    };

    const options = {
      autoResize: true,
      clickToUse: false,
      edges: {
        arrows: 'to',
        shadow: true
      },
      interaction: {
        hover: true
      },
      groups: optionGroups,
      layout: {
        improvedLayout: true,
        hierarchical: {
          enabled: false,
          nodeSpacing: 300,
          treeSpacing: 400,
          blockShifting: true,
          parentCentralization: true,
          direction: 'UD',
          sortMethod: 'directed'
        }
      }
    };

    this.nodes = new DataSet([
      { id: 1, label: 'Engine', group: 'engine' },
      { id: 2, label: 'Job 1', group: 'job' },
      { id: 3, label: 'Job 2', group: 'job' },
      { id: 4, label: 'Job 3', group: 'job' },
      { id: 5, label: 'Task 1', group: 'task' },
      { id: 6, label: 'Task 2', group: 'task' },
      { id: 7, label: 'Task 3', group: 'task' },
      { id: 8, label: 'Done', group: 'done' },
      { id: 9, label: 'Task 1', group: 'task' },
      { id: 10, label: 'Task 2', group: 'task' },
      { id: 11, label: 'Task 3', group: 'task' },
      { id: 12, label: 'Done', group: 'done' },
      { id: 13, label: 'Task 1', group: 'task' },
      { id: 14, label: 'Task 2', group: 'task' },
      { id: 15, label: 'Task 3', group: 'task' },
      { id: 16, label: 'Task 4', group: 'task' },
      { id: 17, label: 'Task 5', group: 'task' },
      { id: 18, label: 'Task 6', group: 'task' },
      { id: 19, label: 'Task 7', group: 'task' },
      { id: 20, label: 'Task 8', group: 'task' },
      { id: 21, label: 'Task 9', group: 'task' },
      { id: 22, label: 'Task 10', group: 'task' },
      { id: 23, label: 'Done', group: 'done' }
    ]);

    // create an array with edges
    this.edges = new DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 2, to: 5 },
      { from: 2, to: 6 },
      { from: 2, to: 7 },
      { from: 2, to: 8 },
      { from: 3, to: 9 },
      { from: 3, to: 10 },
      { from: 3, to: 11 },
      { from: 3, to: 12 },
      { from: 4, to: 13 },
      { from: 13, to: 14 },
      { from: 14, to: 15 },
      { from: 4, to: 16 },
      { from: 16, to: 17 },
      { from: 14, to: 18 },
      { from: 18, to: 19 },
      { from: 18, to: 20 },
      { from: 14, to: 21 },
      { from: 15, to: 22 },
      { from: 15, to: 23 }
    ]);

    const data = {
      nodes: this.nodes,
      edges: this.edges
    };
    const container = document.getElementById('network');
    this.network = new Network(container, data, options);
  }

  ngOnDestroy() {}
}
