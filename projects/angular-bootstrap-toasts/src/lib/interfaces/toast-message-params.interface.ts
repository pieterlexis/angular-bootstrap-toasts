import { ToastToolbarItems } from './toast-toolbar-items.interface';

export interface ToastMessageParams {
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

    /** Class for toolbar block */
    toolbarClass?: string;

    /** Class for close button */
    closeButtonClass?: string;

    /** Buttons for toast with type "confirm" */
    toolbarItems?: ToastToolbarItems;
}
