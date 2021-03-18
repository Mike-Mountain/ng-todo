import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {createInitialState, createSession, SessionState, SessionUser} from './session.model';

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'session'})
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }

  public login(data: SessionUser, token: string): void {
    const user = createSession(data, token);
    this.update(user);
  }

  public logout(): void {
    this.update(createInitialState());
  }

}
