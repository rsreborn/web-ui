import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RscTitleComponent } from './rsc-title.component';


@NgModule({
    declarations: [
        RscTitleComponent
    ],
    exports: [
        RscTitleComponent
    ],
    imports: [
        CommonModule
    ]
})
export class RscTitleModule {
}
