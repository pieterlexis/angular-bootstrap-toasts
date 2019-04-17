import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularBootstrapToastsModule } from 'projects/angular-bootstrap-toasts/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularBootstrapToastsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
