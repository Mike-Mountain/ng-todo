import {Injectable} from '@angular/core';
import {Query, toBoolean} from '@datorama/akita';
import {SessionStore} from './session.store';
import {SessionState, SessionUser} from './session.model';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {

  public token$ = this.select(({token}) => token);
  public loggedInUser$: Observable<SessionUser | undefined> = this.select().pipe(
    map(item => item.user)
  );

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return this.getValue().token !== undefined;
  }

}
