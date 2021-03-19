import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Task } from './task.model';

export interface TaskState extends EntityState<Task> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tasks' })
export class TaskStore extends EntityStore<TaskState> {

  constructor() {
    super();
  }

}
