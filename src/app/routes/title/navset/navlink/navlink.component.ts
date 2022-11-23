import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'li[rsr-navlink]',
    templateUrl: './navlink.component.html',
    styleUrls: [ './navlink.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class NavlinkComponent implements OnInit {

    @HostBinding('class.rsr-navlink')
    readonly hostClass = true;

    @Input()
    link: string = '';

    @Input()
    href: string = '';

    @Input()
    icon: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    @HostBinding('style.list-style-image')
    get listStyleImage(): string {
        if (!this.icon) {
            return '';
        } else {
            return `url('/assets/title/nav/icons/${this.icon}.gif')`;
        }
    }

}
