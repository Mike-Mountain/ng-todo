import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'todo':
        return 'To Do';
      case 'complete':
        return 'Complete';
    }
    return '';
  }

}
