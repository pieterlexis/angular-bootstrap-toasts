import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularBootstrapToastsModule } from 'projects/angular-bootstrap-toasts/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularBootstrapToastsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
