import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReplaySubject, Subscription} from 'rxjs';
import {createTask, Task, TaskStatus} from '../../store/task.model';
import {TaskService} from '../../store/task.service';
import {TaskQuery} from '../../store/task.query';
import {Location} from '@angular/common';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {EditTaskComponent} from '../edit-task/edit-task.component';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {

  public taskDetails: Task | undefined;
  public modalRef: BsModalRef | undefined;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private config: ModalOptions = {
    class: 'custom-modal'
  };

  constructor(private route: ActivatedRoute,
              private location: Location,
              private modalService: BsModalService,
              private taskService: TaskService,
              private taskQuery: TaskQuery) {
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroyed$)).subscribe(params => {
      if (!this.taskQuery.getHasCache()) {
        this.taskService.get<Task>().subscribe();
      }
      this.taskQuery.selectEntity(params.id).pipe(takeUntil(this.destroyed$)).subscribe(task => {
        if (task) {
          this.taskDetails = createTask(task);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public openModal(template: TemplateRef<EditTaskComponent>): void {
    this.modalRef = this.modalService.show(template, this.config);
  }

  public toggleTaskState(newState: TaskStatus): void {
    this.taskService.update<Task>(this.taskDetails?.id, {status: newState}).subscribe();
  }

  public goBack(): void {
    this.location.back();
  }

}
