import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskDetailsComponent} from './components/task-details/task-details.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: ':id', component: TaskDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
