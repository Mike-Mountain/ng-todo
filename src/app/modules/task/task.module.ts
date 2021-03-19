import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TaskRoutingModule} from './task-routing.module';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskDetailsComponent} from './components/task-details/task-details.component';
import {TaskListItemComponent} from './components/task-list-item/task-list-item.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    TaskListItemComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule {
}
