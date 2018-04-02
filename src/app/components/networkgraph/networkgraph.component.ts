import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EngineService, JobService } from '../../services';
import { Network, DataSet, Node, Edge, IdType } from 'vis';
import { Engine, Job, Task } from '../../model/index';

@Component({
  selector: 'sample-network-graph',
  templateUrl: './networkgraph.component.html',
  styleUrls: ['./networkgraph.component.scss']
})
export class NetworkGraphComponent implements OnInit, OnDestroy {
  // nodes?: Node;
  // edges?: Edge;
  network?: Network;

  constructor(private route: ActivatedRoute, private engineService: EngineService, private jobService: JobService) { }

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

    this.route.paramMap.subscribe(params => {
      const engineId = Number (params.get('id'));
      this.engineService.getEngines().subscribe(valuesEngines => {
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
          if (engineId === (engine.id) {
            let jobsUrl;
            engine.links.filter(function (link) {
              if (link.rel === 'engine:jobs') {
                jobsUrl = link.href;
              }
            });
            this.jobService.getJobs(jobsUrl).subscribe(vlaueJobs => {
              vlaueJobs.map(job => {
                const jobTasksUrls = job.links
                  .filter(link => link.rel === 'job:tasks')
                  .map(link => link.href);
                jobTasksUrls.map(url => {
                  this.jobService.getTasks(url).subscribe(response => {
                    job.tasks = response._embedded;
                  });
                });
              });
              const nodes = new DataSet(this.createNodes(engine, vlaueJobs));
              const edges = new DataSet(this.createEdges(engine, vlaueJobs));
              // create a network
              const data = {
                nodes: nodes,
                edges: edges
              };
              const container = document.getElementById('network');
              this.network = new Network(container, data, options);
            });
          }
        });
      });
    });
    /*
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
*/
  }

  ngOnDestroy() { }

  createNodes(engine: Engine, jobs: Job[]) {
    console.log(engine);
    const nodeValue: DataSet = new Array();
    nodeValue.push({ id: engine.id + 'engine', label: engine.name, group: 'engine', title: engine.name });
    jobs.map(job => {
      nodeValue.push({ id: job.id + 'job', label: job.name, group: 'job' });
      job.tasks.map(task => {
        if (task.className === task.DONE_TASK) {
          nodeValue.push({ id: task.id + 'task', label: task.name, group: 'done', title: task.name });
        } else {
          nodeValue.push({ id: task.id + 'task', label: task.name, group: 'task', title: task.name });
        }
      });
      return nodeValue;
    });
  }

  createEdges(engine: Engine, jobs: Job[]) {
    const edgeValue: DataSet = new Array();
    jobs.map(job => {
      edgeValue.push({ from: engine.id + 'engine', to: job.id + 'job' });
      job.tasks.map(task => {
        if (task.immediateParentTaskId === task.id) {
          edgeValue.push({ from: job.id + 'job', to: task.id + 'task' });
        } else {
          edgeValue.push({ from: task.immediateParentTaskId + 'task', to: task.id + 'task', label: task.sequence });
        }
      });
    });
    return edgeValue;
  }

}
