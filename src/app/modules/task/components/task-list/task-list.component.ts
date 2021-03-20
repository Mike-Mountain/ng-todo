import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from '../../store/task.service';
import {TaskQuery} from '../../store/task.query';
import {ReplaySubject} from 'rxjs';
import {createTask, Task} from '../../store/task.model';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  public activeTab = 'open';
  public masterList: Task[] = [];
  public filteredTasks = {
    open: [createTask({})],
    complete: [createTask({})]
  };

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private taskService: TaskService,
              private taskQuery: TaskQuery) {
  }

  ngOnInit(): void {
    if (!this.taskQuery.getHasCache()) {
      this.taskService.get<Task[]>().subscribe();
    }
    this.taskQuery.selectAll().pipe(takeUntil(this.destroyed$)).subscribe(tasks => {
      this.masterList = [];
      this.masterList = tasks.map(task => createTask(task));
      this.FilterTasks(this.masterList);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public changeTab(tab: string): void {
    this.activeTab = tab;
  }

  private FilterTasks(masterList: Task[]): void {
    this.filteredTasks = {
      open: masterList.filter(task => task.status === 'todo'),
      complete: masterList.filter(task => task.status === 'complete')
    };
  }
}
