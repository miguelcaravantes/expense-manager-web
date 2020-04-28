import { Directive, AfterContentInit, ContentChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { FieldErrorDirective } from './field-error.directive';
import { PendingFieldDirective } from './pending-field.directive';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'mat-form-field'
})
export class FieldDirective implements AfterContentInit {


  @ContentChild(NgControl) ngControl: NgControl;
  @ContentChild(FieldErrorDirective) inputError: FieldErrorDirective;
  @ContentChild(PendingFieldDirective) pendingField: PendingFieldDirective;
  @ContentChild(MatInput) matInput: MatInput;


  constructor() {
  }


  ngAfterContentInit(): void {
    if (this.inputError) {
      this.inputError.control = this.ngControl;
      // todo use label instead of placeholder
      this.inputError.placeholder = this.matInput.placeholder;
    }

    if (this.pendingField) {
      this.pendingField.control = this.ngControl;
    }
  }
}
