import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';
import { ToastMessage, ContainerPositionModel } from '../../models';
import { ContainerPosition } from '../../interfaces';
import { AngularBootstrapToastsService } from '../../angular-bootstrap-toasts.service';

@Component({
    selector: 'angular-bootstrap-toasts-container',
    templateUrl: './toasts-container.component.html',
    styleUrls: ['./toasts-container.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger(
            'toastAnimation',
            [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('350ms ease', style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'scale(1)', opacity: 1 }),
                    animate('300ms ease', style({ transform: 'scale(0)', opacity: 0 }))
                ])
            ]
        )
    ]
})
export class ToastsContainerComponent implements OnInit, OnDestroy {

    @Input()
    public set placement (data: ContainerPosition) {
        this._placement = data;

        this.validatePlacement();
    }

    public get placement (): ContainerPosition {
        return this._placement;
    }

    @Input()
    public width: string = '250px';

    @Input()
    public classes: string = '';

    public margin: string = '';

    public toastsList: ToastMessage[] = [];

    private _placement: ContainerPosition = new ContainerPositionModel();
    private messagesListSubscription: Subscription;

    constructor (
        private readonly toastsService: AngularBootstrapToastsService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    public ngOnInit (): void {
        this.messagesListSubscription = this.toastsService.toastsList$
            .subscribe((toasts) => {
                this.toastsList = toasts;

                this.changeDetector.markForCheck();
            });
    }

    public ngOnDestroy (): void {
        if (this.messagesListSubscription) {
            this.messagesListSubscription.unsubscribe();
        }
    }

    private validatePlacement (): void {
        if (!this._placement) {
            throw new Error(`Toasts container must receive a placement object as input parameter!`);
        }
    }

}
