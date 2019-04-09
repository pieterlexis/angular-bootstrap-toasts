import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularBootstrapToastsModule } from 'projects/angular-bootstrap-toasts/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularBootstrapToastsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
