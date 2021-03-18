import {Component, Input, OnInit} from '@angular/core';
import {SessionService} from '../../../authentication/store/session/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isLoggedIn: boolean | undefined;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.sessionService.logout();
  }
}
