import { Injectable } from '@angular/core';
import { FormBuilder, AbstractControlOptions, FormGroup, ValidatorFn, AsyncValidatorFn, FormArray } from '@angular/forms';

// tslint:disable-next-line: no-any
const reflectValidations = (controlsConfig: { [key: string]: any } | any[], form: FormGroup | FormArray) =>
  Object.entries(controlsConfig).forEach(
    ([name, config]) => Array.isArray(config) && Reflect.set(form.get(name) || {}, 'validationMessages', config[3]));

@Injectable()
export class FormBuilderService extends FormBuilder {

  // TODO: support control

  group(
    // tslint:disable-next-line: no-any
    controlsConfig: { [key: string]: any },
    // tslint:disable-next-line: no-any
    options: AbstractControlOptions | { [key: string]: any } | null = null): FormGroup {

    const group = super.group(controlsConfig, options);
    reflectValidations(controlsConfig, group);
    return group;
  }

  array(
    // tslint:disable-next-line: no-any
    controlsConfig: any[],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormArray {

    const formArray = super.array(controlsConfig, validatorOrOpts, asyncValidator);
    reflectValidations(controlsConfig, formArray);
    return formArray;
  }

}

