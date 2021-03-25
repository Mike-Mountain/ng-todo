import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSrc = new BehaviorSubject<string>('light');

  constructor() {
  }

  public setTheme(theme: string): void {
    this.themeSrc.next(theme);
  }

  public selectTheme(): Observable<string> {
    return this.themeSrc.asObservable();
  }

  public getTheme(): string {
    return this.themeSrc.value;
  }

  public toggleTheme(element: HTMLElement, theme: string): void {
    if (element) {
      element.setAttribute('data-theme', theme);
    }
  }
}
