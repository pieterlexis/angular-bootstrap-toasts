import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ToastMessage } from '../../Models/toast-message.models';
import { AngularBootstrapToastsService } from '../../angular-bootstrap-toasts.service';
import { Subscription, timer } from 'rxjs';
import anime from '../../../../node_modules/animejs/lib/anime.es.js';

@Component({
    selector: 'Toast-Message',
    templateUrl: './toast-message.component.html',
    styleUrls: [
        './toast-message.component.css'
    ]
})
export class ToastMessageComponent implements OnInit, OnDestroy {
    @Input() public Message: ToastMessage;

    public durationLine = {
        percents: '100%'
    };

    private durationSubscription: Subscription;
    private durationAnimation;

    constructor (
        private toastsService: AngularBootstrapToastsService
    ) {}

    ngOnInit () {
        // this.durationSubscription = timer(this.Message.Duration).subscribe(() => {
        //     this.remove();
        // });

        this.durationAnimation = anime({
            targets: this.durationLine,
            percents: '0%',
            duration: this.Message.Duration,
            easing: 'linear',
            complete: () => {
                this.remove();
            }
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
