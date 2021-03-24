import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import { LandingComponent } from './components/landing/landing.component';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    LandingComponent
  ],
  exports: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        ProgressbarModule
    ]
})
export class CoreModule {
}
