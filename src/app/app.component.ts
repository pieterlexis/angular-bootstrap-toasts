import { Component, OnInit } from '@angular/core';
import { AngularBootstrapToastsService } from 'projects/angular-bootstrap-toasts/src/public-api';

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

  public ToastTitle: string       = 'Custom Title';
  public ToastMessage: string     = 'Custom Message';
  public ToastDuration: number    = 5000;

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

  public showSuccessToast () {
    this.toastsService.successToast({
      text: this.ToastMessage,
      title: this.ToastTitle,
      duration: this.ToastDuration
    });
  }
}
