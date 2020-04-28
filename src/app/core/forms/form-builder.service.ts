import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Injectable()
export class FormBuilderService extends FormBuilder {

  _createControl(controlConfig: any): AbstractControl {
    // tslint:disable-next-line: no-string-literal
    const control = super['_createControl'](controlConfig);
    if (Array.isArray(controlConfig)) {
      const messages: { [key: string]: string } = controlConfig[3] || {};
      Reflect.set(control, 'validationMessages', messages);
    }
    return control;
  }
}
