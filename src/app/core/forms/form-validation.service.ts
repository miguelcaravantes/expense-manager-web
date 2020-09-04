import { Injectable } from '@angular/core';
import { NgControl, AbstractControl, ValidationErrors } from '@angular/forms';


const defaultMessages: { [key: string]: string } = {
  required: '[name] is required',
  email: 'The email format is not valid',
  minlength: 'The minimun length is {requiredLength}',
  maxlength: 'The maximun length is {requiredLength}',
};

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  processErrors(ngControl: NgControl): string {
    const { control, errors } = ngControl;
    const join = (p: string, c: string) => `${p}. ${c}`;
    return control && errors ?
      Object.keys(errors)
        .map(key => this.getMessages(control, errors, key))
        .reduce(join) : '';
  }

  getMessages(control: AbstractControl, errors: ValidationErrors, errorKey: string): string {
    const errorPayload = errors[errorKey];
    const controlMessages = this.getControlMessages(control);
    const errorMessage = controlMessages[errorKey] ?? defaultMessages[errorKey];

    return this.processMessage(errorMessage, errorPayload);
  }

  getControlMessages(control: AbstractControl): { [key: string]: string } {
    return Reflect.get(control, 'validationMessages') || {};
  }

  private processMessage(message: string, errorPayload: { [key: string]: string }): string {
    return message.replace(/{.*?}/g, (match, _) => {
      const prop = match.replace(/{|}/g, '');
      return errorPayload[prop];
    });
  }
}



