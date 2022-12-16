import { Injectable, Renderer2 } from '@angular/core';
import { State } from './state';

export enum Theme {
    RSC = 'RSC',
    RS2_BETA = 'RS2_BETA',
    RS_LATE_03 = 'RS_LATE_03',
    RS_LATE_04 = 'RS_LATE_04',
    RS_LATE_05 = 'RS_LATE_05',
    RS_06 = 'RS_06',
    RS_07 = 'RS_07',
    RS_08 = 'RS_08',
}

export const themeList = [
    Theme.RSC, Theme.RS2_BETA, Theme.RS_LATE_03, Theme.RS_LATE_04,
    Theme.RS_LATE_05, Theme.RS_06, Theme.RS_07, Theme.RS_08
];

@Injectable({
    providedIn: 'root'
})
export class ThemeStore {

    readonly theme = new State('rsr-theme', Theme.RS_06, true);

    applyTheme(renderer: Renderer2): void {
        const currentThemeClassName = this.theme.value.replace(/_/g, '-').toLowerCase();
        for (const theme of themeList) {
            const themeClassName = theme.replace(/_/g, '-').toLowerCase();
            if (document.body.classList.contains(themeClassName) && themeClassName !== currentThemeClassName) {
                renderer.removeClass(document.body, themeClassName);
            }
        }

        renderer.addClass(document.body, currentThemeClassName);
    }

}
