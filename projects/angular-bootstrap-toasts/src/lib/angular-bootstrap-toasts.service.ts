import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastMessage, ToastMessageParams } from './Models/toast-message.models';

@Injectable()
export class AngularBootstrapToastsService {

  private messagesList: BehaviorSubject<ToastMessage[]> = new BehaviorSubject<ToastMessage[]>([]);
  public get MessagesList$ (): Observable<ToastMessage[]> {
    return this.messagesList.asObservable();
  }

  private defaultTitle: string = 'Title';
  public get DefaultTitle (): string {
    return this.defaultTitle;
  }

  private defaultText: string = 'Message';
  public get DefaultText (): string {
    return this.defaultText;
  }

  private defaultDelay: number = 0;
  public get DefaultDelay (): number {
    return this.defaultDelay;
  }

  private defaultDuration: number = 5000;
  public get DefaultDuration (): number {
    return this.defaultDuration;
  }

  private maxMessageId: number = 1;

  constructor () {}

  /** Show success toast message */
  public successToast (params: ToastMessageParams) {
    const messages    = this.messagesList.getValue();
    const validParams = this.validateParams(params);

    messages.push(
      new ToastMessage(validParams, this.maxMessageId)
    );

    this.maxMessageId++;
    this.messagesList.next(messages);
  }

  /** Destroy toast message by toastId from DOM and MessagesList */
  public destroyToast (toastId: number) {
    const messages = this.messagesList.getValue();

    for (const [index, message] of messages.entries()) {
      if (message.Id === toastId) {
        messages.splice(index, 1);
        break;
      }
    }

    this.messagesList.next(messages);
  }

  /** Change Default **Title** for all toasts wich not get `title` property from params when creating */
  public changeDefaultTitle (newTitle: string) {
    if (!newTitle || typeof newTitle !== 'string') {
      throw new Error('Tost default title must be a string');
    } else {
      this.defaultTitle = newTitle;
    }
  }

  /** Change Default **Text** for all toasts wich not get `text` property from params when creating */
  public changeDefaultText (newText: string) {
    if (!newText || typeof newText !== 'string') {
      throw new Error('Tost default text must be a string');
    } else {
      this.defaultText = newText;
    }
  }

  /** Change Default **Duration** for all toasts */
  public changeDefaultDuration (duration: number) {
    if (typeof duration !== 'number') {
      throw new Error('Tost duration must be a number');
    } else if (duration < 5) {
      throw new Error('Tost duration must be more than 5 milliseconds');
    } else {
      this.defaultDelay = duration;
    }
  }

  private validateParams (params: ToastMessageParams): ToastMessageParams {
    const newParams = params;

    newParams.title    = (newParams.title)    ? newParams.title    : this.DefaultTitle;
    newParams.text     = (newParams.text)     ? newParams.text     : this.DefaultText;
    newParams.duration = (newParams.duration) ? newParams.duration : this.DefaultDuration;

    return newParams;
  }
}
