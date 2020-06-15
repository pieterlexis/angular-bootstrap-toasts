import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ToastMessage } from '../../models/toast-message.model';
import { filter, tap } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'toast-message',
    templateUrl: './toast-message.component.html',
    styleUrls: ['./toast-message.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastMessageComponent implements OnInit, OnDestroy {

    @Input()
    public toast: ToastMessage;

    public currentDuration: number;
    public progressLineWidth: string = '100%';

    private progressUpdateIntervalMs: number = 10;
    private isMouseOverWrapper: boolean = false;

    private durationTimerSubscription: Subscription;

    constructor (
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    public ngOnInit (): void {
        this.currentDuration = this.toast.duration;

        this.durationTimerSubscription = interval(this.progressUpdateIntervalMs)
            .pipe(
                filter(() => (
                    (this.toast.isDurationPausedByMouse && !this.isMouseOverWrapper)
                    ||
                    (!this.toast.isDurationPausedByMouse)
                )),
                tap(() => {
                    this.currentDuration -= this.progressUpdateIntervalMs;

                    if (this.toast.isProgressLineEnabled) {
                        this.updateProgressLineWidth();
                    }

                    this.onProgressUpdate();
                })
            )
            .subscribe(() => this.changeDetector.markForCheck());
    }

    public ngOnDestroy (): void {
        if (this.durationTimerSubscription) {
            this.durationTimerSubscription.unsubscribe();
        }
    }

    public onToastWrapperMouseOver (): void {
        this.isMouseOverWrapper = true;
    }

    public onToastWrapperMouseOut (): void {
        this.isMouseOverWrapper = false;
    }

    public onToastWrapperClick (): void {
        if (this.toast.isClosableByMouseClick) {
            this.toast.close(false);
        }
    }

    public closeToast (confirmationResult: boolean = false): void {
        this.toast.close(confirmationResult);
    }

    private updateProgressLineWidth (): void {
        this.progressLineWidth = (100 / this.toast.duration * this.currentDuration).toFixed(0) + '%';
    }

    private onProgressUpdate (): void {
        if (this.currentDuration <= 0) {
            this.toast.close();
        }
    }

}
