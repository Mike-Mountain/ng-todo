import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {createTask, Task} from '../../store/task.model';
import {editTaskFields} from '../../forms/edit-task.form';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {TaskService} from '../../store/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  @Input() public task: Task | undefined;
  @Input() public modalRef: BsModalRef | undefined;
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = editTaskFields;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    if (!this.task) {
      this.task = createTask({});
    }
  }

  public createOrUpdate(): void {
    if (this.task) {
      if (this.task.id) {
        this.updateTask(this.task);
      } else {
        this.createTask(this.task);
      }
    }
  }

  public closeModal(): void {
    this.modalRef?.hide();
  }

  private updateTask(task: Task): void {
    this.taskService.update<Task>(task.id, task).subscribe(() => {
      this.closeModal();
    });
  }

  private createTask(task: Task): void {
    this.taskService.add<Task>(task).subscribe(() => {
      this.closeModal();
    });
  }
}
