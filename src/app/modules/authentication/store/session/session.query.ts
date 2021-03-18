import {Injectable} from '@angular/core';
import {Query, toBoolean} from '@datorama/akita';
import {SessionStore} from './session.store';
import {SessionState} from './session.model';
import {filter, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {

  public token$ = this.select(({token}) => token);
  public loggedInUser$ = this.select().pipe(
    filter(({user}) => toBoolean(user)),
    map((x) => `${(x.user?.username)}`)
  );
  private isLoggedIn$ = this.select(({user}) => toBoolean(user));

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return toBoolean(this.isLoggedIn$);
  }

}
