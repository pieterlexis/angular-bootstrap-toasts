export class ToastMessage {
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

    private iconClass: string;
    public get IconClass (): string {
        return this.iconClass;
    }

    private titleClass: string;
    public get TitleClass (): string {
        return this.titleClass;
    }

    private bodyClass: string;
    public get BodyClass (): string {
        return this.bodyClass;
    }

    constructor (
        params: ToastMessageParams,
        systemParams: SystemToastParams
    ) {
        this.id             = systemParams.id;
        this.type           = systemParams.type;
        this.text           = params.text;
        this.title          = params.title;
        this.moment         = params.moment;
        this.duration       = params.duration;
        this.iconClass      = params.iconClass;
        this.titleClass     = params.titleClass;
        this.bodyClass      = params.bodyClass;
    }
}

export class ToastMessageParams {
    text: string;

    title?: string;

    /** Great property to show time/date or something like this (short info near title) */
    moment?: string;

    /** Time in milliseconds over which will be displayed toast  */
    duration?: number;

    /** Class of icon for title
     * For example: `fas fa-heart` (FontAwesome)
     * You can also add color class, ex: `fas fa-heart text-success` (Bootstrap color class)
     */
    iconClass?: string;

    /** Class for title block of toast */
    titleClass?: string;

    /** Class for body block of toast */
    bodyClass?: string;
}

export type ToastType = 'simple' | 'confirm';

export interface SystemToastParams {
    id: number;
    type: ToastType;
}
