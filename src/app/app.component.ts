import { Component, OnInit } from '@angular/core';
import { AngularBootstrapToastsService } from 'projects/angular-bootstrap-toasts/src/public-api';
import { PositionType } from 'projects/angular-bootstrap-toasts/src/lib/Models/toast-container.models';
import { ToastMessageParams } from 'projects/angular-bootstrap-toasts/src/lib/Models/toast-message.models';

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

  public ToastTitle: string             = 'Custom Title';
  public ToastMessage: string           = 'Custom Message';
  public ToastDuration: number          = 5000;
  public ToastMoment: string            = 'just now';
  public ToastIconClass: string         = 'fas fa-check text-success';
  public ToastTitleClass: string        = 'text-secondary';
  public ToastBodyClass: string         = '';
  public ToastProgressLineClass: string = 'bg-success';

  public IsToastProgressLineEnabled: boolean          = true;
  public IsToastDurationPausedWhenMouseEnter: boolean = true;

  public ActionButtonText: string     = 'Confirm action';
  public ActionButtonClass: string    = '';
  public ActionButtonVisible: boolean = true;

  public CancelButtonText: string     = 'Cancel';
  public CancelButtonClass: string    = '';
  public CancelButtonVisible: boolean = true;

  public ContainerPosition: PositionType = 'topRight';

  public ContainerMarginLeft: string   = '10px';
  public ContainerMarginRight: string  = '10px';
  public ContainerMarginTop: string    = '10px';
  public ContainerMarginBottom: string = '10px';

  ngOnInit() {
    this.toastsService.changeDefaultTitle(this.DefaultTitle);
    this.toastsService.changeDefaultText(this.DefaultMessage);
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
    const params = this.getToastData();
    this.toastsService.showSimpleToast(params);
  }

  public showConfirmToast () {
    const params = this.getToastData();
    const toast  = this.toastsService.showConfirmToast(params);

    const toastSubscription = toast.ConfirmationResult$.subscribe((value) => {
      console.log(`Toast confirm result: ${value}`);
      toastSubscription.unsubscribe();
    });
  }

  private getToastData (): ToastMessageParams {
    return {
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
      toolbarItems: {
        actionButton: {
          text: this.ActionButtonText,
          class: this.ActionButtonClass,
          visible: this.ActionButtonVisible
        },
        cancelButton: {
          text: this.CancelButtonText,
          class: this.CancelButtonClass,
          visible: this.CancelButtonVisible
        }
      }
    };
  }
}
