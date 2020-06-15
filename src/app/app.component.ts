import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularBootstrapToastsService } from 'projects/angular-bootstrap-toasts/src/public-api';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    public defaultTitle: string    = 'Default Title';
    public defaultMessage: string  = 'Default Message';
    public defaultDuration: number = 5000;

    public toastForm: FormGroup;

    public toolbarItems: FormGroup;
    public actionButton: FormGroup;
    public cancelButton: FormGroup;

    public containerPlacementForm: FormGroup;


    public containerClasses: string = '';

    constructor (
        private toastsService: AngularBootstrapToastsService
    ) {}

    public ngOnInit (): void {
        this.toastsService.changeDefaultTitle(this.defaultTitle);
        this.toastsService.changeDefaultText(this.defaultMessage);

        this.createToolbarItemsForm();
        this.createContainerForm();
        this.createMainForm();
    }

    public changeDefaultTitle (e: any): void {
        const title = e.target.value;

        this.defaultTitle = title;
        this.toastsService.changeDefaultTitle(title);
    }

    public changeDefaultMessage (e: any): void {
        const message = e.target.value;

        this.defaultMessage = message;
        this.toastsService.changeDefaultText(message);
    }

    public changeDefaultDuration (e: any): void {
        const duration = +e.target.value;

        this.defaultDuration = duration;
        this.toastsService.changeDefaultDuration(duration);
    }

    public showSimpleToast (): void {
        const params = this.toastForm.value;
        this.toastsService.showSimpleToast(params);
    }

    public showConfirmToast (): void {
        const params = this.toastForm.value;
        const toast  = this.toastsService.showConfirmToast(params);

        const toastSubscription = toast.confirmationResult$
            .subscribe((value) => {
                console.log(`Toast confirm result: ${value}`);
                toastSubscription.unsubscribe();
            });
    }

    private createMainForm (): void {
        this.toastForm = new FormGroup({
            text: new FormControl('Some custom Message.<br>Here is available <b>HTML</b> tags!'),
            title: new FormControl('Custom Title'),
            duration: new FormControl(5000),
            moment: new FormControl('just now'),
            iconClass: new FormControl('fas fa-heart text-danger'),
            titleClass: new FormControl(''),
            bodyClass: new FormControl(''),
            toastClass: new FormControl(''),
            progressLineClass: new FormControl('text-danger'),
            toolbarClass: new FormControl(''),
            closeButtonClass: new FormControl(''),
            showProgressLine: new FormControl(true),
            closeByClick: new FormControl(false),
            pauseDurationOnMouseEnter: new FormControl(true),
            toolbarItems: this.toolbarItems
        });
    }

    private createToolbarItemsForm (): void {
        this.actionButton = new FormGroup({
            text: new FormControl('Confirm action'),
            class: new FormControl('btn btn-success btn-sm'),
            visible: new FormControl(true)
        });

        this.cancelButton = new FormGroup({
            text: new FormControl('Cancel'),
            class: new FormControl('btn btn-secondary btn-sm'),
            visible: new FormControl(true)
        });

        this.toolbarItems = new FormGroup({
            actionButton: this.actionButton,
            cancelButton: this.cancelButton
        });
    }

    private createContainerForm (): void {
        const defaultMargin: string = '10px';

        this.containerPlacementForm = new FormGroup({
            position: new FormControl('topRight'),
            marginLeft: new FormControl(defaultMargin),
            marginRight: new FormControl(defaultMargin),
            marginTop: new FormControl(defaultMargin),
            marginBottom: new FormControl(defaultMargin)
        });
    }

}
