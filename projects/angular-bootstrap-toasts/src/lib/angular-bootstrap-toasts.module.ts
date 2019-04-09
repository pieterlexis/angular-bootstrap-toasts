import { NgModule } from '@angular/core';
import { AngularBootstrapToastsComponent } from './angular-bootstrap-toasts.component';
import { ToastsContainerComponent } from './toasts-container/toasts-container.component';

@NgModule({
  declarations: [
    AngularBootstrapToastsComponent,
    ToastsContainerComponent
  ],
  imports: [
  ],
  exports: [
    AngularBootstrapToastsComponent
  ]
})
export class AngularBootstrapToastsModule { }
