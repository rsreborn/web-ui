import { Component, Input, OnInit } from '@angular/core';
import { Theme, ThemeStore } from '../../../store/theme-store';

@Component({
    selector: 'rsr-late05-title',
    templateUrl: './late05-title.component.html',
    styleUrls: [ './late05-title.component.scss' ]
})
export class Late05TitleComponent implements OnInit {

    @Input()
    headerMessage: string = '';

    constructor(private themeStore: ThemeStore) {
    }

    ngOnInit(): void {
    }

    get isLate05Theme(): boolean {
        return this.themeStore.theme.value === Theme.RS_LATE_05;
    }

}
