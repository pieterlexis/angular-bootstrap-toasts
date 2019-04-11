import { Component, Input, OnInit } from '@angular/core';
import { ToastMessage } from '../../Models/toast-message.models';
import { AngularBootstrapToastsService } from '../../angular-bootstrap-toasts.service';
import anime from '../../../../node_modules/animejs/lib/anime.es.js';

@Component({
    selector: 'Toast-Message',
    templateUrl: './toast-message.component.html',
    styleUrls: [
        './toast-message.component.css'
    ]
})
export class ToastMessageComponent implements OnInit {
    @Input() public Message: ToastMessage;

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
            duration: this.Message.Duration,
            easing: 'linear',
            complete: () => {
                this.remove();
            }
        });
    }

    public animationPause () {
        if (this.durationAnimation && this.Message.IsDurationPausedByMouse) {
            this.durationAnimation.pause();
        }
    }

    public animationPlay () {
        if (this.durationAnimation && this.durationAnimation.paused) {
            this.durationAnimation.play();
        }
    }

    public remove () {
        this.toastsService.destroyToast(this.Message.Id);
    }
}
