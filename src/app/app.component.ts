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
    this.toastsService.changeDefaultTitle('Custom Title');
    this.toastsService.changeDefaultText('Custom Text');

    this.toastsService.successToast({
      text: 'Some long message to show for users!!! I can\'t beliave at this shit!'
    });

    setTimeout(() => {
      this.toastsService.successToast({
        text: '',
        moment: '10:06 PM'
      });
    }, 1500);

    setTimeout(() => {
      this.toastsService.destroyToast(1);
    }, 3000);
  }
}
