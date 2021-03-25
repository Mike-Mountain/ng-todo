import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {createTask, Task} from '../../store/task.model';
import {editTaskFields} from '../../forms/edit-task.form';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {TaskService} from '../../store/task.service';
import {ReplaySubject} from 'rxjs';
import {ThemeService} from '../../../shared/services/theme/theme.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('modal') modal: ElementRef<HTMLElement> | undefined;

  @Input() public task: Task | undefined;
  @Input() public modalRef: BsModalRef | undefined;
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = editTaskFields;
  private destroyed$ = new ReplaySubject<boolean>(1);

  constructor(private taskService: TaskService,
              private themeService: ThemeService) {
  }

  ngOnInit(): void {
    if (!this.task) {
      this.task = createTask({});
    }
  }

  ngAfterViewInit(): void {
    this.themeService.selectTheme().pipe(takeUntil(this.destroyed$)).subscribe(theme => {
      if (this.modal) {
        this.themeService.toggleTheme(this.modal.nativeElement, theme);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
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
