import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Task} from '../../store/task.model';
import {TaskService} from '../../store/task.service';
import {TaskQuery} from '../../store/task.query';
import {Location} from '@angular/common';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  public taskDetails: Task | undefined;
  private paramSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private location: Location,
              private taskQuery: TaskQuery) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      if (this.taskQuery.getEntity(params.id)) {
        this.taskDetails = this.taskQuery.getEntity(params.id);
      } else {
        this.taskService.get<Task>(params.id).subscribe(task => {
          this.taskDetails = task;
        });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

}
