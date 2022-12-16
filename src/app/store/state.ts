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
        save: boolean = true,
        autoLoadSaveData: boolean = true,
    ) {
        this.name = name;
        this.subject = new BehaviorSubject<T>(initialValue);
        this.value$ = this.subject.asObservable();
        this.save = save;

        if (save && autoLoadSaveData) {
            this.loadSavedState();
        }
    }

    loadSavedState(
        validationFunction?: (value: T, ...args: unknown[]) => boolean,
        ...validationArgs: unknown[]
    ): T {
        if (!validationArgs?.length) {
            validationArgs = undefined;
        }

        const savedData = JSON.parse(localStorage.getItem(this.name) || null) as T || null;

        if (savedData && (!validationFunction || validationFunction(savedData, validationArgs))) {
            this.value = savedData;
        }

        return this.value;
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
