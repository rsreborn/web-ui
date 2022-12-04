import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import clone from 'clone-deep';

export class State<T> {

    readonly name: string;
    readonly value$: Observable<T>;
    readonly subject: BehaviorSubject<T>;
    readonly save: boolean;

    constructor(
        name: string,
        initialValue: T = null,
        save: boolean,
    ) {
        this.name = name;
        this.subject = new BehaviorSubject<T>(initialValue);
        this.value$ = this.subject.asObservable();
        this.save = save;
    }

    subscribe(callback: (value: T) => void): Subscription {
        return this.value$.subscribe(s => callback(clone(s)));
    }

    patch(values: Partial<T>): T {
        this.value = { ...this.value, ...values };
        return this.value;
    }

    put(value: T): T {
        this.value = value;
        return this.value;
    }

    set value(value: T) {
        if (this.save) {
            localStorage.setItem(this.name, JSON.stringify(value));
        }

        this.subject.next(value);
    }

    get value() {
        return clone(this.subject.value);
    }

}
