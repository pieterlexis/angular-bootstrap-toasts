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

  private defaultDuration: number = 5000;
  public get DefaultDuration (): number {
    return this.defaultDuration;
  }

  private minDuration: number   = 300;
  private maxMessageId: number  = 1;

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
    const validTitle = this.validateTitle(newTitle);

    if (validTitle) {
      this.defaultTitle = validTitle;
    }
  }

  /** Change Default **Text** for all toasts wich not get `text` property from params when creating */
  public changeDefaultText (newText: string) {
    const validText = this.validateText(newText);

    if (validText) {
      this.defaultText = validText;
    }
  }

  /** Change Default **Duration** for all toasts */
  public changeDefaultDuration (duration: number) {
    const validDuration = this.validateDuration(duration);

    if (validDuration) {
      this.defaultDuration = duration;
    }
  }

  private validateParams (params: ToastMessageParams): ToastMessageParams {
    const newParams = params;

    try {
      newParams.title = this.validateTitle(newParams.title);
    } catch (err) {
      newParams.title = this.DefaultTitle;
    }

    try {
      newParams.text = this.validateText(newParams.text);
    } catch (err) {
      newParams.text = this.DefaultText;
    }

    try {
      newParams.duration = this.validateDuration(newParams.duration);
    } catch (err) {
      newParams.duration = this.DefaultDuration;
    }

    return newParams;
  }

  private validateTitle (title: string) {
    if (!title || typeof title !== 'string') {
      throw new Error('Tost default title must be a string');
    }

    return title;
  }

  private validateText (text: string) {
    if (!text || typeof text !== 'string') {
      throw new Error('Tost default text must be a string');
    }

    return text;
  }

  private validateDuration (duration: number) {
    const durationAsNumber: number = +duration;

    if (isNaN(durationAsNumber)) {
      throw new Error('Tost duration must be a number');
    } else if (durationAsNumber < this.minDuration) {
      throw new Error(`Tost duration must be more than ${this.minDuration} milliseconds`);
    }

    return durationAsNumber;
  }
}
