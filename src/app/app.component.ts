import { Component, OnInit, Renderer2 } from '@angular/core';
import { Theme, themeList, ThemeStore } from './store/theme-store';

@Component({
    selector: 'rsr-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

    readonly themeList = themeList;

    constructor(private renderer: Renderer2,
                private themeStore: ThemeStore) {
    }

    ngOnInit(): void {
        this.themeStore.applyTheme(this.renderer);
    }

    themeSelected(e: Event): void {
        const newTheme = (e.target as HTMLSelectElement).value as Theme;
        this.themeStore.theme.put(newTheme);
        this.themeStore.applyTheme(this.renderer);
    }

    get theme() {
        return this.themeStore.theme.value;
    }

}
