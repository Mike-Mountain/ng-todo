import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoadingSrc = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  public setIsLoading(isLoading: boolean): void {
    this.isLoadingSrc.next(isLoading);
  }

  public getIsLoading(): Observable<boolean> {
    return this.isLoadingSrc.asObservable();
  }
}
