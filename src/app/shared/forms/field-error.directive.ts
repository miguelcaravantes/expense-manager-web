import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormValidationService } from '../../core/forms/form-validation.service';
import { startWith } from 'rxjs/operators';


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'mat-error'
})
export class FieldErrorDirective implements AfterViewInit {

  control: NgControl;
  placeholder: string;

  constructor(private element: ElementRef, private validationErrorsService: FormValidationService) {
  }

  ngAfterViewInit(): void {
    this.control.statusChanges.pipe(startWith(null as string)).subscribe(this.setError);
  }

  setError = () => {
    const error = this.validationErrorsService.processErrors(this.control);
    this.element.nativeElement.innerHTML = error.replace('[name]', `<b>${this.placeholder}</b>`);
  }

}
