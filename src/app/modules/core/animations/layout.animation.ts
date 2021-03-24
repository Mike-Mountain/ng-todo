import {animate, animation, style} from '@angular/animations';

export const menuTransition = animation([
  style({
    width: '{{width}}%',
    opacity: '{{opacity}}',
    zIndex: '{{zIndex}}'
  }),
  animate('{{time}}')
]);
