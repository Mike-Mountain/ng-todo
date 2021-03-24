import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TaskRoutingModule} from './task-routing.module';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskDetailsComponent} from './components/task-details/task-details.component';
import {TaskListItemComponent} from './components/task-list-item/task-list-item.component';
import {SharedModule} from '../shared/shared.module';
import {TaskStatusPipe} from './pipes/task-status/task-status.pipe';
import {TaskPriorityPipe} from './pipes/task-priority/task-priority.pipe';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    TaskListItemComponent,
    TaskStatusPipe,
    TaskPriorityPipe,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormlyModule
  ]
})
export class TaskModule {
}
