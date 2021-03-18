import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SessionStore} from './session.store';
import {BaseHttpService} from '../../../shared/services/base-http/base-http.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SessionService extends BaseHttpService<any> {

  constructor(private sessionStore: SessionStore,
              private http: HttpClient) {
    super(http);
  }

  public login(data: { username: string, password: string }): Observable<any> {
    const url = super.setUrl('auth/login');
    return super._post(url, data).pipe(
      tap(response => {
        const user = JSON.parse(atob(response.accessToken.split('.')[1]));
        this.sessionStore.login(user, response.accessToken);
      })
    );
  }

}
