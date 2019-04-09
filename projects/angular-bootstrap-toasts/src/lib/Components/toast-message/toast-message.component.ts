import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ToastMessage } from '../../Models/toast-message.models';
import { AngularBootstrapToastsService } from '../../angular-bootstrap-toasts.service';
import { Subscription, timer } from 'rxjs';

@Component({
    selector: 'Toast-Message',
    templateUrl: './toast-message.component.html',
    styleUrls: [
        './toast-message.component.css'
    ]
})
export class ToastMessageComponent implements OnInit, OnDestroy {
    @Input() public Message: ToastMessage;

    private durationSubscription: Subscription;

    constructor (
        private toastsService: AngularBootstrapToastsService
    ) {}

    ngOnInit () {
        this.durationSubscription = timer(this.Message.Duration).subscribe(() => {
            this.remove();
        });
    }

    ngOnDestroy () {
        if (this.durationSubscription) {
            this.durationSubscription.unsubscribe();
        }
    }

    public remove () {
        this.toastsService.destroyToast(this.Message.Id);
    }
}
