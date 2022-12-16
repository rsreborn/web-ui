import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleRoutingModule } from './title-routing.module';
import { TitleComponent } from './title.component';
import { Late03TitleModule } from './late03-title/late03-title.module';
import { Late04TitleModule } from './late04-title/late04-title.module';
import { Late05TitleModule } from './late05-title/late05-title.module';
import { RscTitleModule } from './rsc-title/rsc-title.module';


@NgModule({
    declarations: [
        TitleComponent
    ],
    imports: [
        CommonModule,
        TitleRoutingModule,
        Late03TitleModule,
        Late04TitleModule,
        Late05TitleModule,
        RscTitleModule
    ]
})
export class TitleModule {
}
