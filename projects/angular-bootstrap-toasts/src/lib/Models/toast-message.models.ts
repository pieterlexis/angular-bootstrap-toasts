import { Subject, Observable } from 'rxjs';

export class ToastMessage {
    private confirmationResult: Subject<boolean> = new Subject<boolean>();
    public get ConfirmationResult$ (): Observable<boolean> {
        return this.confirmationResult.asObservable();
    }

    private id: number;
    public get Id (): number {
        return this.id;
    }

    private type: ToastType;
    public get Type (): ToastType {
        return this.type;
    }

    private title: string;
    public get Title (): string {
        return this.title;
    }

    private text: string;
    public get Text (): string {
        return this.text;
    }

    private moment: string;
    public get Moment (): string {
        return this.moment;
    }

    private duration: number;
    public get Duration (): number {
        return this.duration;
    }

    private toolbarItems: ToastToolbarItems;
    public get ToolbarItems (): ToastToolbarItems {
        return this.toolbarItems;
    }

    private isProgressLineEnabled: boolean;
    public get IsProgressLineEnabled (): boolean {
        return this.isProgressLineEnabled;
    }

    private isDurationPausedByMouse: boolean;
    public get IsDurationPausedByMouse (): boolean {
        return this.isDurationPausedByMouse;
    }

    private isClosableByMouseClick: boolean;
    public get IsClosableByMouseClick (): boolean {
        return this.isClosableByMouseClick;
    }

    private iconClass: string;
    public get IconClass (): string {
        return this.iconClass;
    }

    private closeButtonClass: string;
    public get CloseButtonClass (): string {
        return this.closeButtonClass;
    }

    private progressLineClass: string;
    public get ProgressLineClass (): string {
        return this.progressLineClass;
    }

    private titleClass: string;
    public get TitleClass (): string {
        return this.titleClass;
    }

    private bodyClass: string;
    public get BodyClass (): string {
        return this.bodyClass;
    }

    private toastClass: string;
    public get ToastClass (): string {
        return this.toastClass;
    }

    public Close (confirmationStatus?: boolean) {
        this.confirmationResult.next(confirmationStatus || false);
    }

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
        this.closeButtonClass        = params.closeButtonClass;
        this.toolbarItems            = params.toolbarItems;
    }
}

export class ToastMessageParams {
    text?: string;

    title?: string;

    /** Great property to show time/date or something like this (short info near title) */
    moment?: string;

    /** Time in milliseconds over which will be displayed toast  */
    duration?: number;

    /** Is toast will have progress line of duration time? */
    showProgressLine?: boolean;

    /** Is toast will closable by mouse click on toast block */
    closeByClick?: boolean;

    /** Is toast duration needs to be paused when mouse enter on toast block? */
    pauseDurationOnMouseEnter?: boolean;

    /** Class of progress line */
    progressLineClass?: string;

    /** Class of icon for title
     * For example: `fas fa-heart` (FontAwesome)
     * You can also add color class, ex: `fas fa-heart text-success` (Bootstrap color class)
     */
    iconClass?: string;

    /** Class for title block of toast */
    titleClass?: string;

    /** Class for body block of toast */
    bodyClass?: string;

    /** Class for block of toast */
    toastClass?: string;

    /** Class for close button */
    closeButtonClass?: string;

    /** Buttons for toast with type "confirm" */
    toolbarItems?: ToastToolbarItems;
}

export type ToastType = 'simple' | 'confirm';

export interface SystemToastParams {
    id: number;
    type: ToastType;
}

export interface ToastToolbarItems {
    actionButton: ToastToolbarButton;
    cancelButton: ToastToolbarButton;
}

export interface ToastToolbarButton {
    text: string;
    visible?: boolean;
    class?: string;
}
