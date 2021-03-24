import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SessionService} from '../../../authentication/store/session/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isLoggedIn: boolean | undefined;
  @Output() toggleMenu = new EventEmitter<boolean>();

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.sessionService.logout();
  }

  public closeMenu(event: Event): void {
    this.toggleMenu.emit(true);
    event.stopImmediatePropagation();
  }
}
