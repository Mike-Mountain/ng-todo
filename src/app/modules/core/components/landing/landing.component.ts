import {Component, OnDestroy, OnInit} from '@angular/core';
import {SessionQuery} from '../../../authentication/store/session/session.query';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  public isLoggedIn = false;
  private authSubscription: Subscription | undefined;

  constructor(private sessionQuery: SessionQuery) {
  }

  ngOnInit(): void {
    this.authSubscription = this.sessionQuery.loggedInUser$.subscribe(user => {
      this.isLoggedIn = user?.id !== undefined;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

}
