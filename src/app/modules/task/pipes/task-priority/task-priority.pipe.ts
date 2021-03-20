import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskPriority'
})
export class TaskPriorityPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'low':
        return 'fas fa-chevron-down text-success';
      case 'medium':
        return 'fas fa-chevron-up text-warning';
      case 'high':
        return 'fas fa-arrow-circle-up text-danger';
    }
    return '';
  }

}
