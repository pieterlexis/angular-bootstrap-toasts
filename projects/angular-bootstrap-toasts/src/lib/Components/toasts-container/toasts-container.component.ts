import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ToastMessage } from '../../Models/toast-message.models';
import { Subscription } from 'rxjs';
import { AngularBootstrapToastsService } from '../../angular-bootstrap-toasts.service';
import { PositionModel } from '../../Models/toast-container.models';

@Component({
    selector: 'Angular-Bootstrap-Toasts-Container',
    templateUrl: './toasts-container.component.html',
    styleUrls: [
        './toasts-container.component.css'
    ]
})
export class ToastsContainerComponent implements OnInit, OnDestroy {

    @Input() public Placement: PositionModel = {
        position: 'topRight'
    };

    private defaultMargin: string = '15px';

    public messagesList: ToastMessage[] = [];

    private messagesListSubscription: Subscription;

    constructor (
        private toastsService: AngularBootstrapToastsService
    ) {}

    ngOnInit () {
        this.messagesListSubscription = this.toastsService.MessagesList$.subscribe(messages => {
            this.messagesList = messages;
        });

        this.initPosition();
    }

    ngOnDestroy () {
        if (this.messagesListSubscription) {
            this.messagesListSubscription.unsubscribe();
        }
    }

    private initPosition () {
        if (!this.Placement) {
            this.Placement = {};
        }

        this.Placement.marginTop    = this.Placement.marginTop    || this.defaultMargin;
        this.Placement.marginBottom = this.Placement.marginBottom || this.defaultMargin;
        this.Placement.marginLeft   = this.Placement.marginLeft   || this.defaultMargin;
        this.Placement.marginRight  = this.Placement.marginRight  || this.defaultMargin;

        this.Placement.position     = this.Placement.position     || 'topRight';
    }
}
