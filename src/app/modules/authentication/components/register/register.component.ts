import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RegisterFormModel} from '../../store/session/session.model';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {registerFields} from '../../forms/register.form';
import {SessionService} from '../../store/session/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form = new FormGroup({});
  public model: RegisterFormModel = new RegisterFormModel({});
  public fields: FormlyFieldConfig[] = registerFields;

  constructor(private sessionService: SessionService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public register(): void {
    this.sessionService.register(this.model).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
