import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {SessionQuery} from '../../../authentication/store/session/session.query';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('toggleMenu', [
      state('open', style({
        width: '35%',
        opacity: '1',
        zIndex: '10',
      })),
      state('closed', style({
        width: '0',
        opacity: '0',
        zIndex: '-10',
      })),
      transition('open => closed', animate('.1s linear')),
      transition('closed => open', animate('.1s linear'))
    ])
  ]
})
export class LayoutComponent implements OnInit {

  menuState = 'closed';
  isLoggedIn = false;

  constructor(private sessionQuery: SessionQuery) {
  }

  ngOnInit(): void {
    this.sessionQuery.select().subscribe(session => {
      this.isLoggedIn = session.token !== undefined;
    });
  }

  toggleMenu(): void {
    this.menuState === 'closed' ?
      this.menuState = 'open' :
      this.menuState = 'closed';
  }

}
