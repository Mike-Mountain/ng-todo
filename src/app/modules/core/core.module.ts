import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import { LandingComponent } from './components/landing/landing.component';


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
    RouterModule
  ]
})
export class CoreModule {
}
