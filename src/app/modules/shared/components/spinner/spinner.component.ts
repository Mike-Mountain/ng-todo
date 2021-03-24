import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from '../../services/loading/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public isLoading$: Observable<boolean> | undefined;

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.loadingService.getIsLoading();
  }

}
