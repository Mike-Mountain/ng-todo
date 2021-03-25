import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SessionService} from '../../../authentication/store/session/session.service';
import {ThemeService} from '../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isLoggedIn: boolean | undefined;
  @Output() toggleMenu = new EventEmitter<boolean>();

  constructor(private sessionService: SessionService,
              private themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.sessionService.logout();
  }

  public closeMenu(event: Event): void {
    this.toggleMenu.emit(true);
    event.stopImmediatePropagation();
  }

  public toggleTheme(): void {
    let theme = this.themeService.getTheme();
    theme = theme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }
}
