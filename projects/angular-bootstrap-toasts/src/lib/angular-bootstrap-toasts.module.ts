import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    ToastsContainerComponent,
    ToastMessageComponent
} from './components';

import { AngularBootstrapToastsService } from './angular-bootstrap-toasts.service';

@NgModule({
    declarations: [
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
export class AngularBootstrapToastsModule {}
