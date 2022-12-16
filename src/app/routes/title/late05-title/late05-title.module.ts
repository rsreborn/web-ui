import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Late05TitleComponent } from './late05-title.component';
import { NavsetModule } from './navset/navset.module';


@NgModule({
    declarations: [
        Late05TitleComponent
    ],
    exports: [
        Late05TitleComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NavsetModule
    ]
})
export class Late05TitleModule {
}
