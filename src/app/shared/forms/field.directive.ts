import { Directive, AfterContentInit, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { FieldErrorDirective } from './field-error.directive';
import { PendingFieldDirective } from './pending-field.directive';
import { MatLabel } from '@angular/material/form-field';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'mat-form-field'
})
export class FieldDirective implements AfterContentInit {


  @ContentChild(NgControl) ngControl: NgControl;
  @ContentChild(FieldErrorDirective) inputError: FieldErrorDirective;
  @ContentChild(PendingFieldDirective) pendingField: PendingFieldDirective;
  @ContentChild(MatInput) matInput: MatInput;
  @ContentChild(MatLabel, { read: ElementRef }) matLabel: ElementRef;


  constructor() {
  }


  ngAfterContentInit(): void {
    if (this.inputError) {
      this.inputError.control = this.ngControl;
      if (this.matLabel) {
        this.inputError.controlLabel = this.matLabel.nativeElement.innerText;
      }
    }

    if (this.pendingField) {
      this.pendingField.control = this.ngControl;
    }
  }
}
