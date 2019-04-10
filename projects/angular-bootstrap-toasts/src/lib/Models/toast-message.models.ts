export class ToastMessage {
    private id: number;
    public get Id (): number {
        return this.id;
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

    constructor (
        params: ToastMessageParams,
        toastId: number
    ) {
        this.id        = toastId;
        this.text      = params.text;
        this.title     = params.title;
        this.moment    = params.moment;
        this.duration  = params.duration;
        this.iconClass = params.iconClass;
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
}

export type ToastType = 'simple' | 'success' | 'error' | 'confirm';
