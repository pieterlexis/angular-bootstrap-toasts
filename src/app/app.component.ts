import { Component, OnInit } from '@angular/core';
import { AngularBootstrapToastsService } from 'projects/angular-bootstrap-toasts/src/public-api';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private toastsService: AngularBootstrapToastsService
  ) {}

  ngOnInit() {
    this.toastsService.success('Some message');

    setTimeout(() => {
      this.toastsService.success('N I C E');
    }, 1500);
  }
}
