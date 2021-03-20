import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToStringPipe } from './pipes/to-string/to-string.pipe';



@NgModule({
    declarations: [ToStringPipe],
    exports: [
        ToStringPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
