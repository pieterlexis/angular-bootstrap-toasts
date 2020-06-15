import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastMessageParams, SystemToastParams } from './interfaces';
import { ToastMessage } from './models';

@Injectable()
export class AngularBootstrapToastsService {

    public get toastsList$ (): Observable<ToastMessage[]> {
        return this._toastsList$.asObservable();
    }

    public get defaultTitle (): string {
        return this._defaultTitle;
    }

    public get defaultText (): string {
        return this._defaultText;
    }

    public get defaultDuration (): number {
        return this._defaultDuration;
    }

    private _defaultTitle: string = 'Title';
    private _defaultText: string = 'Message';
    private _defaultDuration: number = 5000;
    private _minDuration: number = 300;
    private _maxMessageId: number = 1;

    private _toastsList$: BehaviorSubject<ToastMessage[]> = new BehaviorSubject<ToastMessage[]>([]);

    constructor () {}

    /** Show success toast message */
    public showSimpleToast (params: ToastMessageParams): ToastMessage {
        const systemParams: SystemToastParams = {
            id: this._maxMessageId,
            type: 'simple'
        };

        return this.createToast(params, systemParams);
    }

    /** Show toast message with confirmation and decline button variants */
    public showConfirmToast (params: ToastMessageParams): ToastMessage {
        const systemParams: SystemToastParams = {
            id: this._maxMessageId,
            type: 'confirm'
        };

        return this.createToast(params, systemParams);
    }

    /** Change Default **Title** for all toasts wich not get `title` property from params when creating */
    public changeDefaultTitle (newTitle: string): void {
        this.validateTitle(newTitle);

        this._defaultTitle = newTitle;
    }

    /** Change Default **Text** for all toasts wich not get `text` property from params when creating */
    public changeDefaultText (newText: string): void {
        this._defaultText = newText;
    }

    /** Change Default **Duration** for all toasts */
    public changeDefaultDuration (duration: number): void {
        this.validateDuration(duration);

        this._defaultDuration = duration;
    }

    private createToast (params: ToastMessageParams, systemParams: SystemToastParams): ToastMessage {
        const messages    = [...this._toastsList$.getValue()];
        const validParams = this.validateParams(params);
        const toast       = new ToastMessage(validParams, systemParams);

        messages.push(toast);

        this._maxMessageId++;
        this._toastsList$.next(messages);

        this.initToastConfirmationObserver(toast);

        return toast;
    }

    private initToastConfirmationObserver (toast: ToastMessage): void {
        const toastSubscription = toast.confirmationResult$
            .subscribe(() => {
                const actualMessages = [...this._toastsList$.getValue()]
                    .filter((message) => message.id !== toast.id);

                this._toastsList$.next(actualMessages);

                toastSubscription.unsubscribe();
            });
    }

    private validateParams (params: ToastMessageParams): ToastMessageParams {
        const newParams    = { ...params };
        newParams.duration = +params.duration;

        this.validateTitle(newParams.title);
        this.validateDuration(newParams.duration);

        return newParams;
    }

    private validateTitle (title: string): void {
        if (!title || typeof title !== 'string') {
            throw new Error('Tost title must be a string with length');
        }
    }

    private validateDuration (duration: number): void {
        const durationAsNumber: number = +duration;

        if (isNaN(durationAsNumber)) {
            throw new Error('Tost duration must be a number');
        } else if (durationAsNumber < this._minDuration) {
            throw new Error(`Tost duration must be more than ${this._minDuration} milliseconds`);
        }
    }

}
