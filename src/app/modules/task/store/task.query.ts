import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TaskStore, TaskState } from './task.store';

@Injectable({ providedIn: 'root' })
export class TaskQuery extends QueryEntity<TaskState> {

  constructor(protected store: TaskStore) {
    super(store);
  }

}
