import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastMessage } from './Models/toast-message.models';

@Injectable()
export class AngularBootstrapToastsService {

  private messagesList: BehaviorSubject<ToastMessage[]> = new BehaviorSubject<ToastMessage[]>([]);
  public get MessagesList$ (): Observable<ToastMessage[]> {
    return this.messagesList.asObservable();
  }

  constructor () {}

  /** ### Show success toast message */
  public success (message: string, title?: string) {
    this.messagesList.value.push(
      new ToastMessage({
        messsage: message,
        title: title || ''
      })
    );
    // this.messagesList.next(
    //   this.messagesList.get
    // );
  }
}
