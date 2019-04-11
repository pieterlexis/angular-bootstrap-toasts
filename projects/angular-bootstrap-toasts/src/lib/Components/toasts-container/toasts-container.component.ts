import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ToastMessage } from '../../Models/toast-message.models';
import { Subscription } from 'rxjs';
import { AngularBootstrapToastsService } from '../../angular-bootstrap-toasts.service';
import { PositionModel } from '../../Models/toast-container.models';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'Angular-Bootstrap-Toasts-Container',
    templateUrl: './toasts-container.component.html',
    styleUrls: [
        './toasts-container.component.css'
    ],
    animations: [
        trigger(
          'enterAnimation', [
            transition(':enter', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate('350ms ease', style({ transform: 'translateX(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0)', opacity: 1 }),
                animate('300ms ease', style({ transform: 'scale(0.1)', opacity: 0 }))
            ])
          ]
        )
    ]
})
export class ToastsContainerComponent implements OnInit, OnDestroy {

    @Input() public Placement: PositionModel = {
        position: 'topRight'
    };

    /** Width as CSS value */
    @Input() public Width: string = '250px';

    private defaultMargin: string = '15px';

    public toastsList: ToastMessage[] = [];

    private messagesListSubscription: Subscription;

    constructor (
        private toastsService: AngularBootstrapToastsService
    ) {}

    ngOnInit () {
        this.messagesListSubscription = this.toastsService.ToastsList$.subscribe(toasts => {
            this.toastsList = toasts;
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
