import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionQuery} from '../../../authentication/store/session/session.query';
import {LoadingService} from '../../../shared/services/loading/loading.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private sessionQuery: SessionQuery,
              private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.setIsLoading(true);
    if (!this.sessionQuery.isLoggedIn()) {
      return next.handle(request);
    }
    this.sessionQuery.token$.subscribe(token => {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    });
    return next.handle(request).pipe(
      tap(() => {
        this.loadingService.setIsLoading(false);
      })
    );
  }
}
