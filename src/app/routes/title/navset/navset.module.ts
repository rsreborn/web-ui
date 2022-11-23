import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavsetComponent } from './navset.component';
import { NavlinkComponent } from './navlink/navlink.component';


@NgModule({
    declarations: [
        NavsetComponent,
        NavlinkComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavsetComponent,
        NavlinkComponent
    ]
})
export class NavsetModule {
}
