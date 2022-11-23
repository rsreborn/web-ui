import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleRoutingModule } from './title-routing.module';
import { TitleComponent } from './title.component';
import { NavsetModule } from './navset/navset.module';


@NgModule({
    declarations: [
        TitleComponent
    ],
    imports: [
        CommonModule,
        TitleRoutingModule,
        NavsetModule
    ]
})
export class TitleModule {
}
