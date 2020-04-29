import { Injectable } from '@angular/core';
import { NgControl, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  processErrors(control: NgControl): string {
    if (control.errors) {
      const errorLines =
        Object.keys(control.errors)
          .map(key => this.getMessages(control.control, control.errors[key], key));

      return errorLines.join('. ');
    } else {
      return '';
    }
  }

  getMessages(control: AbstractControl, error: object, errorKey: string) {
    const controlMessages = this.getControlMessages(control);
    let result = controlMessages[errorKey];
    if (!result) {
      result = defaultMessages[errorKey];
    }
    if (result) {
      result = this.processMessage(result, error);
    }
    return result === null || result === undefined ? '' : result;
  }

  getControlMessages(control: AbstractControl): { [key: string]: string } {
    return Reflect.get(control, 'validationMessages') || {};
  }

  private processMessage(message: string, error: object): string {
    return message.replace(/{.*?}/g, (match, _) => {
      const prop = match.replace(/{|}/g, '');
      return error[prop];
    });
  }


}



const defaultMessages = {
  required: 'This field is required',
  email: 'The email format is not valid',
  minlength: 'The minimun length is {requiredLength}',
  maxlength: 'The maximun length is {requiredLength}',
};
