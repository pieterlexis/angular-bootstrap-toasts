import { Subject } from 'rxjs';

import {
    ToastMessageParams,
    ToastToolbarItems,
    SystemToastParams
} from '../interfaces';

import { ToastType } from '../shared';

export class ToastMessage {

    public readonly confirmationResult$: Subject<boolean> = new Subject<boolean>();
    public readonly id: number;
    public readonly type: ToastType;
    public readonly title: string;
    public readonly text: string;
    public readonly moment: string;
    public readonly duration: number;
    public readonly toolbarItems: ToastToolbarItems;
    public readonly isProgressLineEnabled: boolean;
    public readonly isDurationPausedByMouse: boolean;
    public readonly isClosableByMouseClick: boolean;
    public readonly iconClass: string;
    public readonly closeButtonClass: string;
    public readonly progressLineClass: string;
    public readonly titleClass: string;
    public readonly bodyClass: string;
    public readonly toolbarClass: string;
    public readonly toastClass: string;

    constructor (
        params: ToastMessageParams,
        systemParams: SystemToastParams
    ) {
        this.id                      = systemParams.id;
        this.type                    = systemParams.type;
        this.text                    = params.text;
        this.title                   = params.title;
        this.moment                  = params.moment;
        this.duration                = params.duration;
        this.isProgressLineEnabled   = params.showProgressLine;
        this.isDurationPausedByMouse = params.pauseDurationOnMouseEnter;
        this.isClosableByMouseClick  = params.closeByClick;
        this.iconClass               = params.iconClass;
        this.progressLineClass       = params.progressLineClass;
        this.titleClass              = params.titleClass;
        this.bodyClass               = params.bodyClass;
        this.toastClass              = params.toastClass;
        this.toolbarClass            = params.toolbarClass;
        this.closeButtonClass        = params.closeButtonClass;
        this.toolbarItems            = params.toolbarItems;
    }

    public close (confirmationStatus: boolean = false) {
        this.confirmationResult$.next(confirmationStatus);
    }

}
