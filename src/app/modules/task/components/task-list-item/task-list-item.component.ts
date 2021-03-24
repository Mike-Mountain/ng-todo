import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Task, TaskStatus} from '../../store/task.model';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {EditTaskComponent} from '../edit-task/edit-task.component';
import {TaskService} from '../../store/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  @Input() task: Task | undefined;

  public modalRef: BsModalRef | undefined;
  private config: ModalOptions = {
    class: 'custom-modal'
  };

  constructor(private modalService: BsModalService,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  public openModal(event: Event, template: TemplateRef<EditTaskComponent>): void {
    this.modalRef = this.modalService.show(template, this.config);
    event.stopImmediatePropagation();
  }

  public updateStatus(event: Event, status: TaskStatus): void {
    if (this.task) {
      this.taskService.update<Task>(this.task.id, {status}).subscribe();
    }
    event.stopImmediatePropagation();
  }

  public deleteTask(event: Event): void {
    if (this.task) {
      this.taskService.delete<Task>(this.task.id).subscribe();
    }
    event.stopImmediatePropagation();
  }
}
