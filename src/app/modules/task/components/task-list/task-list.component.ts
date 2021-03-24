import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {TaskService} from '../../store/task.service';
import {TaskQuery} from '../../store/task.query';
import {ReplaySubject} from 'rxjs';
import {createTask, Task} from '../../store/task.model';
import {takeUntil, tap} from 'rxjs/operators';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {EditTaskComponent} from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  public modalRef: BsModalRef | undefined;
  public activeTab = 'open';
  public masterList: Task[] = [];
  public filteredTasks = {
    open: [createTask({})],
    complete: [createTask({})]
  };

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private config: ModalOptions = {
    class: 'custom-modal'
  };

  constructor(private taskService: TaskService,
              private modalService: BsModalService,
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

  public createTask(template: TemplateRef<EditTaskComponent>): void {
    this.modalRef = this.modalService.show(template, this.config);
  }

  private FilterTasks(masterList: Task[]): void {
    this.filteredTasks = {
      open: masterList.filter(task => task.status === 'todo'),
      complete: masterList.filter(task => task.status === 'complete')
    };
  }
}
