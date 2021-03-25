import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {SessionQuery} from '../../../authentication/store/session/session.query';
import {Observable, ReplaySubject} from 'rxjs';
import {SessionUser} from '../../../authentication/store/session/session.model';
import {TaskQuery} from '../../../task/store/task.query';
import {takeUntil} from 'rxjs/operators';
import {TaskService} from '../../../task/store/task.service';
import {Task} from '../../../task/store/task.model';
import {ThemeService} from '../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('toggleMenu', [
      state('open', style({
        width: '45%',
        opacity: '1',
        zIndex: '10',
      })),
      state('closed', style({
        width: '0',
        opacity: '0',
        zIndex: '-10',
      })),
      transition('open => closed', animate('.2s ease-in')),
      transition('closed => open', animate('.2s ease-out'))
    ])
  ]
})
export class LayoutComponent implements OnInit, OnDestroy {

  @ViewChild('background') background: ElementRef<HTMLElement> | undefined;

  public menuState = 'closed';
  public user$: Observable<SessionUser | undefined> | undefined;
  public isLoggedIn = false;
  public taskProgress = 0;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private sessionQuery: SessionQuery,
              private taskService: TaskService,
              private themeService: ThemeService,
              private taskQuery: TaskQuery) {
  }

  ngOnInit(): void {
    this.sessionQuery.select().pipe(takeUntil(this.destroyed$)).subscribe(session => {
      this.isLoggedIn = session.token !== undefined;
      if (this.isLoggedIn) {
        if (!this.taskQuery.getHasCache()) {
          this.taskService.get<Task[]>().subscribe();
        }

        this.taskQuery.selectAll().pipe(takeUntil(this.destroyed$)).subscribe((tasks) => {
          if (tasks?.length > 0) {
            const complete = tasks.filter(task => task.status === 'complete');
            const a = complete.length;
            const b = tasks.length;
            this.taskProgress = Math.round(((a / b) * 100) * 10) / 10;
          }
        });
      }
    });
    this.themeService.selectTheme().pipe(takeUntil(this.destroyed$)).subscribe(theme => {
      if (this.background) {
        this.themeService.toggleTheme(this.background.nativeElement, theme);
      }
    });
    this.user$ = this.sessionQuery.loggedInUser$;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public toggleMenu(): void {
    this.menuState === 'closed' ?
      this.menuState = 'open' :
      this.menuState = 'closed';
  }

}
