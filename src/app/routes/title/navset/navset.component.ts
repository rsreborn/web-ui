import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rsr-navset',
    templateUrl: './navset.component.html',
    styleUrls: [ './navset.component.scss' ]
})
export class NavsetComponent implements OnInit {

    @Input()
    icon: string = '';

    @Input()
    minHeight: boolean = true;

    constructor() {
    }

    ngOnInit(): void {
    }

    get styles(): { [klass: string]: any } {
        if (!this.icon) {
            return {};
        } else {
            return {
                'background-image': `url('/assets/title/nav/${this.icon}.gif')`
            };
        }
    }

}
