import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularBootstrapToastsComponent } from './angular-bootstrap-toasts.component';
import { ToastsContainerComponent } from './Components/toasts-container/toasts-container.component';
import { ToastMessageComponent } from './Components/toast-message/toast-message.component';
import { AngularBootstrapToastsService } from './angular-bootstrap-toasts.service';

@NgModule({
  declarations: [
    AngularBootstrapToastsComponent,
    ToastsContainerComponent,
    ToastMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    ToastsContainerComponent
  ],
  providers: [
    AngularBootstrapToastsService
  ]
})
export class AngularBootstrapToastsModule { }
