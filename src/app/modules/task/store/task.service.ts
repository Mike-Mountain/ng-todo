import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {TaskStore, TaskState} from './task.store';

@Injectable({providedIn: 'root'})
export class TaskService extends NgEntityService<TaskState> {

  constructor(protected store: TaskStore) {
    super(store);
  }

}
