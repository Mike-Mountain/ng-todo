import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [LayoutComponent],
    exports: [
        LayoutComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
