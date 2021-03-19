import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../store/task.model';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  @Input() task: Task | undefined;

  public date = new Date().getTime();

  constructor() {
  }

  ngOnInit(): void {
  }

}
