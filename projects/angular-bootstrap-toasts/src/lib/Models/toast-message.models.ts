export class ToastMessage {
    private id: number;
    public get Id (): number {
        return this.id;
    }

    private title: string;
    public get Title (): string {
        return this.title;
    }

    private message: string;
    public get Message (): string {
        return this.message;
    }

    private iconClass: string;
    public get IconClass (): string {
        return this.iconClass;
    }

    constructor (
        params: ToastMessageParams
    ) {
        this.message = params.messsage;
        this.title   = params.title;
    }
}

export interface ToastMessageParams {
    messsage: string;

    title?: string;

    /** ### Class of icon for title
     * For example: `fas fa-heart` (FontAwesome)
     */
    iconClass?: string;
}

export type ToastType = 'success';
