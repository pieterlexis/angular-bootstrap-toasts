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
  public DefaultTitle: string    = 'Default Title';
  public DefaultMessage: string  = 'Default Message';
  public DefaultDuration: number = 5000;


  public ToastForm: FormGroup;

  public ToolbarItems: FormGroup;
  public ActionButton: FormGroup;
  public CancelButton: FormGroup;

  public ContainerForm: FormGroup;

  constructor (
    private toastsService: AngularBootstrapToastsService
  ) {}

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
    this.ToastForm = new FormGroup({
      text: new FormControl('Some custom Message.<br>Here is available <b>HTML</b> tags!'),
      title: new FormControl('Custom Title'),
      duration: new FormControl(5000),
      moment: new FormControl('just now'),
      iconClass: new FormControl('fas fa-heart text-danger'),
      titleClass: new FormControl(''),
      bodyClass: new FormControl(''),
      progressLineClass: new FormControl('text-danger'),
      showProgressLine: new FormControl(true),
      pauseDurationOnMouseEnter: new FormControl(true),
      toolbarItems: this.ToolbarItems
    });
  }

  private createToolbarItemsForm () {
    this.ActionButton = new FormGroup({
      text: new FormControl('Confirm action'),
      class: new FormControl('btn btn-success btn-sm'),
      visible: new FormControl(true)
    });

    this.CancelButton = new FormGroup({
      text: new FormControl('Cancel'),
      class: new FormControl('btn btn-secondary btn-sm'),
      visible: new FormControl(true)
    });

    this.ToolbarItems = new FormGroup({
      actionButton: this.ActionButton,
      cancelButton: this.CancelButton
    });
  }

  private createContainerForm () {
    const defaultMargin: string = '10px';

    this.ContainerForm = new FormGroup({
      position: new FormControl('topRight'),
      marginLeft: new FormControl(defaultMargin),
      marginRight: new FormControl(defaultMargin),
      marginTop: new FormControl(defaultMargin),
      marginBottom: new FormControl(defaultMargin)
    });
  }
}
