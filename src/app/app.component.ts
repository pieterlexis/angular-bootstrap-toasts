import { Component, OnInit } from '@angular/core';
import { AngularBootstrapToastsService } from 'angular-bootstrap-toasts/index';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {
  constructor (
    private toastsService: AngularBootstrapToastsService
  ) {}

  public DefaultTitle: string    = 'Default Title';
  public DefaultMessage: string  = 'Default Message';
  public DefaultDuration: number = 5000;



  public ToastForm: FormGroup;

  public ToastTitle: FormControl;
  public ToastMessage: FormControl;
  public ToastDuration: FormControl;
  public ToastMoment: FormControl;
  public ToastIconClass: FormControl;
  public ToastTitleClass: FormControl;
  public ToastBodyClass: FormControl;
  public ToastProgressLineClass: FormControl;

  public IsToastProgressLineEnabled: FormControl;
  public IsToastDurationPausedWhenMouseEnter: FormControl;

  public ToolbarItems: FormGroup;

  public ActionButton: FormGroup;
  public ActionButtonText: FormControl;
  public ActionButtonClass: FormControl;
  public ActionButtonVisible: FormControl;

  public CancelButton: FormGroup;
  public CancelButtonText: FormControl;
  public CancelButtonClass: FormControl;
  public CancelButtonVisible: FormControl;



  public ContainerForm: FormGroup;

  public ContainerPosition: FormControl;
  public ContainerMarginLeft: FormControl;
  public ContainerMarginRight: FormControl;
  public ContainerMarginTop: FormControl;
  public ContainerMarginBottom: FormControl;

  ngOnInit() {
    this.toastsService.changeDefaultTitle(this.DefaultTitle);
    this.toastsService.changeDefaultText(this.DefaultMessage);

    this.createToolbarItemsForm();
    this.createContainerForm();
    this.createMainForm();
  }

  public changeDefaultTitle (e: any) {
    const title = e.target.value;

    this.DefaultTitle = title;
    this.toastsService.changeDefaultTitle(title);
  }

  public changeDefaultMessage (e: any) {
    const message = e.target.value;

    this.DefaultMessage = message;
    this.toastsService.changeDefaultText(message);
  }


  public changeDefaultDuration (e: any) {
    const duration = +e.target.value;

    this.DefaultDuration = duration;
    this.toastsService.changeDefaultDuration(duration);
  }

  public showSimpleToast () {
    const params = this.ToastForm.value;
    this.toastsService.showSimpleToast(params);
  }

  public showConfirmToast () {
    const params = this.ToastForm.value;
    const toast  = this.toastsService.showConfirmToast(params);

    const toastSubscription = toast.ConfirmationResult$.subscribe((value) => {
      console.log(`Toast confirm result: ${value}`);
      toastSubscription.unsubscribe();
    });
  }

  private createMainForm () {
    this.ToastMessage                         = new FormControl('Some custom Message.<br>Here is available <b>HTML</b> tags!');
    this.ToastTitle                           = new FormControl('Custom Title');
    this.ToastDuration                        = new FormControl(5000);
    this.ToastMoment                          = new FormControl('just now');
    this.ToastIconClass                       = new FormControl('fas fa-heart text-danger');
    this.ToastTitleClass                      = new FormControl('');
    this.ToastBodyClass                       = new FormControl('');
    this.ToastProgressLineClass               = new FormControl('text-danger');
    this.IsToastProgressLineEnabled           = new FormControl(true);
    this.IsToastDurationPausedWhenMouseEnter  = new FormControl(true);

    this.ToastForm = new FormGroup({
      text: this.ToastMessage,
      title: this.ToastTitle,
      duration: this.ToastDuration,
      moment: this.ToastMoment,
      iconClass: this.ToastIconClass,
      titleClass: this.ToastTitleClass,
      bodyClass: this.ToastBodyClass,
      progressLineClass: this.ToastProgressLineClass,
      showProgressLine: this.IsToastProgressLineEnabled,
      pauseDurationOnMouseEnter: this.IsToastDurationPausedWhenMouseEnter,
      toolbarItems: this.ToolbarItems
    });
  }

  private createToolbarItemsForm () {
    this.ActionButtonText    = new FormControl('Confirm action');
    this.ActionButtonClass   = new FormControl('btn btn-success btn-sm');
    this.ActionButtonVisible = new FormControl(true);

    this.CancelButtonText    = new FormControl('Cancel');
    this.CancelButtonClass   = new FormControl('btn btn-secondary btn-sm');
    this.CancelButtonVisible = new FormControl(true);

    this.ActionButton = new FormGroup({
      text: this.ActionButtonText,
      class: this.ActionButtonClass,
      visible: this.ActionButtonVisible
    });

    this.CancelButton = new FormGroup({
      text: this.CancelButtonText,
      class: this.CancelButtonClass,
      visible: this.CancelButtonVisible
    });

    this.ToolbarItems = new FormGroup({
      actionButton: this.ActionButton,
      cancelButton: this.CancelButton
    });
  }

  private createContainerForm () {
    const defaultMargin: string = '10px';

    this.ContainerPosition      = new FormControl('topRight');

    this.ContainerMarginLeft    = new FormControl(defaultMargin);
    this.ContainerMarginRight   = new FormControl(defaultMargin);
    this.ContainerMarginTop     = new FormControl(defaultMargin);
    this.ContainerMarginBottom  = new FormControl(defaultMargin);

    this.ContainerForm = new FormGroup({
      position: this.ContainerPosition,
      marginLeft: this.ContainerMarginLeft,
      marginRight: this.ContainerMarginRight,
      marginTop: this.ContainerMarginTop,
      marginBottom: this.ContainerMarginBottom
    });
  }
}
