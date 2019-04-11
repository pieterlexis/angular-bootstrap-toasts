import { Component, Input, OnInit } from '@angular/core';
import { ToastMessage } from '../../Models/toast-message.models';
import { AngularBootstrapToastsService } from '../../angular-bootstrap-toasts.service';
import anime from 'animejs';

@Component({
    selector: 'Toast-Message',
    templateUrl: './toast-message.component.html',
    styleUrls: [
        './toast-message.component.css'
    ]
})
export class ToastMessageComponent implements OnInit {
    @Input() public Toast: ToastMessage;

    public durationLine = {
        percents: '100%'
    };

    private durationAnimation;

    constructor (
        private toastsService: AngularBootstrapToastsService
    ) {}

    ngOnInit () {
        this.durationAnimation = anime({
            targets: this.durationLine,
            percents: '0%',
            duration: this.Toast.Duration,
            easing: 'linear',
            complete: () => {
                this.remove();
            }
        });
    }

    public animationPause () {
        if (this.durationAnimation && this.Toast.IsDurationPausedByMouse) {
            this.durationAnimation.pause();
        }
    }

    public animationPlay () {
        if (this.durationAnimation && this.durationAnimation.paused) {
            this.durationAnimation.play();
        }
    }

    public remove (confirmationResult?: boolean) {
        this.Toast.Close(confirmationResult || false);
    }
}
