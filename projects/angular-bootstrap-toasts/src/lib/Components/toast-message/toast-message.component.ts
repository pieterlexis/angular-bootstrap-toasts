import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ToastMessage } from '../../Models/toast-message.models';
import { AngularBootstrapToastsService } from '../../angular-bootstrap-toasts.service';
import { filter, tap } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'Toast-Message',
    templateUrl: './toast-message.component.html',
    styleUrls: [
        './toast-message.component.css'
    ]
})
export class ToastMessageComponent implements OnInit, OnDestroy {
    @Input() public Toast: ToastMessage;

    public currentDuration: number;
    public progressLineWidth: string = '100%';

    private msInterval: number      = 10;
    private isMouseFocused: boolean = false;
    private durationTimer: Subscription;

    constructor (
        private toastsService: AngularBootstrapToastsService
    ) {}

    ngOnInit () {
        this.currentDuration = this.Toast.Duration;

        this.durationTimer = interval(this.msInterval).pipe(
            filter(() => !this.isMouseFocused),
            tap(() => {
                this.currentDuration -= this.msInterval;

                if (this.Toast.IsProgressLineEnabled) {
                    this.progressLineWidth = (100 / this.Toast.Duration * this.currentDuration).toFixed(0) + '%';
                }

                if (this.currentDuration <= 0) {
                    this.Toast.Close();
                }
            })
        ).subscribe();
    }

    ngOnDestroy () {
        if (this.durationTimer) {
            this.durationTimer.unsubscribe();
        }
    }

    public animationPause () {
        this.isMouseFocused = true;
    }

    public animationPlay () {
        this.isMouseFocused = false;
    }

    public onClick () {
        if (this.Toast.IsClosableByMouseClick) {
            this.Toast.Close(false);
        }
    }

    public remove (confirmationResult?: boolean) {
        this.Toast.Close(confirmationResult || false);
    }
}
