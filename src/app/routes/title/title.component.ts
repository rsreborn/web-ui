import { Component, OnInit } from '@angular/core';
import { Theme, ThemeStore } from '../../store/theme-store';

@Component({
    selector: 'rsr-title',
    templateUrl: './title.component.html',
    styleUrls: [ './title.component.scss' ]
})
export class TitleComponent implements OnInit {

    readonly headerMessages = [
        `Weeee'rrreeee baaaaaack!`,
        `*storm trooper scream*`,
        `Taste the rainbow!`,
        `More there are no they, don't do and didn't do.`,
        `Here's Johnny!`,
        `The candy man can!`,
        `Aren't you glad I didn't say banana?`,
        `Now with 53.2% more butter!`,
        `All your base are belong to us.`,
        `The cake is a lie!`,
        `The best in the business!`,
        `IT'S OVER 9000!!!`,
        `Break me off a piece of that Kit-Kat bar!`,
        `Snake? Snake?! Snaaaaaaaaaaakeeeeeee!`,
        `The cheesiest!`,
        `It's backwards!`,
        `Chocolate chip :)`,
        `ARMADILLO!!!`,
        `Wheeeeee!`,
        `G'day... Mate....`,
        `Are you ready?`,
        `Burnt, like my pop-tarts.`,
        `Spoooooooooooooooooooooooooon!`,
        `I'll be back!`,
        `Heberpnin ifda fook!`,
        `I think magic shop you need.`,
        `The Four Musketeers!`,
        `SAD FOR YOUUUUUU!!!`,
        `The balls are inert.`,
        `VEGETA! I can fly...`,
        `I won't stop, I won't say I've had enough!`,
        `I need an adult.`,
        `Now with 25% MORE developer!`,
        `My peanut.`,
        `This is the good life!`,
        `A wild RS-Reborn appeared!`,
        `Bringing back what we ALL missed. :)`,
        `Horses really like Paul.`,
        `Didn't you miss us?`,
        `Now with 100% more Paul!`,
        `Don't steal Dawn's cookies.`,
        `Don't divide by 0.`,
        `<3 Charlie`,
        `Numberwang!`,
        `'Oh no, there's a bear in my bed!' 'Nope, Chuck Testa!'`
    ];

    readonly randomMessage: string = this.headerMessages[Math.floor(Math.random() * this.headerMessages.length)];

    readonly theme$ = this.themeStore.theme.value$;

    readonly THEME_RSC = Theme.RSC;
    readonly THEME_RS2_BETA = Theme.RS2_BETA;
    readonly THEME_RS_LATE_03 = Theme.RS_LATE_03;
    readonly THEME_RS_LATE_04 = Theme.RS_LATE_04;

    constructor(private themeStore: ThemeStore) {
    }

    ngOnInit(): void {
    }

}
