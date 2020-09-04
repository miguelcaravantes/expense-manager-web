import { Injectable } from '@angular/core';
import { NgControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  processErrors(ngControl: NgControl): string {
    const { control, errors } = ngControl;
    const join = (p: string, c: string) => `${p}. ${c}`;

    if (control) {
      if (errors) {
        return Object.keys(errors)
          .map(key => this.getMessages(control, errors, key))
          .reduce(join);
      }
    }
    return '';
  }

  getMessages(control: AbstractControl, errors: ValidationErrors, errorKey: string): string {
    const error = errors[errorKey];
    const controlMessages = this.getControlMessages(control);
    let result = controlMessages[errorKey];
    if (!result) {
      result = defaultMessages[errorKey];
    }
    if (result) {
      result = this.processMessage(result, error);
    }
    return result;
  }

  getControlMessages(control: AbstractControl): { [key: string]: string } {
    return Reflect.get(control, 'validationMessages') || {};
  }

  private processMessage(message: string, error: { [key: string]: string }): string {
    return message.replace(/{.*?}/g, (match, _) => {
      const prop = match.replace(/{|}/g, '');
      return error[prop];
    });
  }


}



const defaultMessages: { [key: string]: string } = {
  required: '[name] is required',
  email: 'The email format is not valid',
  minlength: 'The minimun length is {requiredLength}',
  maxlength: 'The maximun length is {requiredLength}',
};
