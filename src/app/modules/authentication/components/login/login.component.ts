import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../store/session/session.service';
import {FormGroup} from '@angular/forms';
import {LoginFormModel} from '../../store/session/session.model';
import {loginFields} from '../../forms/login.form';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = new FormGroup({});
  public model: LoginFormModel = new LoginFormModel({});
  public fields: FormlyFieldConfig[] = loginFields;

  constructor(private sessionService: SessionService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.sessionService.login(this.model).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}
