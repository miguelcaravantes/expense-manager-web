import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormValidationService } from '../../core/forms/form-validation.service';
import { startWith } from 'rxjs/operators';


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'mat-error'
})
export class FieldErrorDirective implements OnInit {

  control: NgControl;
  controlLabel: string;

  constructor(private element: ElementRef, private validationErrorsService: FormValidationService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.control.statusChanges.pipe(startWith(null as string)).subscribe(this.setError);
    });
  }


  setError = () => {
    const error = this.validationErrorsService.processErrors(this.control);
    this.element.nativeElement.innerHTML = error.replace('[name]', `<b>${this.controlLabel}</b>`);
  }

}
