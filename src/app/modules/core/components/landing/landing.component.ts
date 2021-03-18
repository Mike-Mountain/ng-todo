import {Component, OnInit} from '@angular/core';
import {SessionQuery} from '../../../authentication/store/session/session.query';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private sessionQuery: SessionQuery) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.sessionQuery.isLoggedIn();
  }

}
