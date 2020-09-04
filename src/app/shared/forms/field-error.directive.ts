import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormValidationService } from '../../core/forms/form-validation.service';
import { startWith } from 'rxjs/operators';


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'mat-error'
})
export class FieldErrorDirective implements AfterViewInit {

  control?: NgControl;
  controlLabel?: string;

  constructor(private element: ElementRef, private validationErrorsService: FormValidationService) {
  }

  ngAfterViewInit(): void {
    if (this.control) {
      this.control.statusChanges?.pipe(startWith('')).subscribe(this.setError);
    }
  }

  setError = () => {
    if (this.control) {
      this.element.nativeElement.innerHTML = this.validationErrorsService.processErrors(this.control);
    }
  }

}
