
import { AbstractControl, ValidatorFn, ValidationErrors, FormArray } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';


const EMAIL_REGEXP =
    // tslint:disable-next-line:max-line-length
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmptyInputValue = <T>(value: T | T[]): boolean => value == null || (Array.isArray(value) && value.length === 0);

export class CoreValidators {

    static minValue = <T>(min: T): ValidatorFn =>
        (control: AbstractControl): ValidationErrors | null =>
            isEmptyInputValue(control.value) || control.value >= min ? null : { minValue: true }

    static maxValue = <T>(max: T): ValidatorFn =>
        (control: AbstractControl): ValidationErrors | null =>
            isEmptyInputValue(control.value) || control.value <= max ? null : { maxValue: true }


    static email = (control: AbstractControl): ValidationErrors | null =>
        (!control.value || EMAIL_REGEXP.test(control.value)) ? null : { email: true }


    static notEmail = (control: AbstractControl): ValidationErrors | null =>
        (!control.value || !EMAIL_REGEXP.test(control.value)) ? null : { notEmail: true }

    static equalsTo = (field: string): ValidatorFn => {
        let comparisionControl: AbstractControl | null;
        return (control: AbstractControl): ValidationErrors | null => {

            const subscribe = () => comparisionControl?.valueChanges.pipe(distinctUntilChanged())
                .subscribe(() => control.updateValueAndValidity());
            const store = () => comparisionControl = control.parent?.get(field);
            const init = () => { store(); subscribe(); };

            if (!comparisionControl) {
                init();
            }

            return !comparisionControl || comparisionControl.value === control.value ? null : { equalsTo: { field } };
        };
    }

    static autocomplete = <T>(validator: (value: T) => boolean): ValidatorFn =>
        (control: AbstractControl): ValidationErrors | null => validator(control.value) ? null : { autocomplete: true }

    static arrayNotEmpty = (control: FormArray): ValidationErrors | null => (control.controls.length > 0) ? null : { arrayNotEmpty: true };

}
