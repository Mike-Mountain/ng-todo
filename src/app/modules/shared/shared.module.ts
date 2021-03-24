import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToStringPipe } from './pipes/to-string/to-string.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
    declarations: [ToStringPipe, SpinnerComponent],
    exports: [
        ToStringPipe,
        SpinnerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
