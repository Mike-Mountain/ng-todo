import {Injectable, OnDestroy} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {SessionQuery} from '../../../authentication/store/session/session.query';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {

  private authSubscription: Subscription | undefined;

  constructor(private sessionQuery: SessionQuery,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthenticated = false;
    this.authSubscription = this.sessionQuery.token$.subscribe(token => {
      isAuthenticated = token !== undefined;
      if (!isAuthenticated) {
        this.router.navigateByUrl('/auth/login');
      }
    });
    return isAuthenticated;
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

}
