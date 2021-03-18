import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../store/session/session.service';
import {SessionQuery} from '../../store/session/session.query';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username && this.password) {
      this.sessionService.login({
        username: this.username,
        password: this.password
      }).subscribe();
    }
  }
}
