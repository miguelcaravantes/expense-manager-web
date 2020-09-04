import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, AbstractControlOptions, FormGroup } from '@angular/forms';

@Injectable()
export class FormBuilderService extends FormBuilder {

  group(
    // tslint:disable-next-line: no-any
    controlsConfig: { [key: string]: any },
    // tslint:disable-next-line: no-any
    options: AbstractControlOptions | { [key: string]: any } | null = null): FormGroup {

    const group = super.group(controlsConfig, options);
    Object.entries(controlsConfig).forEach(
      ([name, config]) => Array.isArray(config) && Reflect.set(group.get(name) || {}, 'validationMessages', config[3])
    );
    return group;
  }
}

