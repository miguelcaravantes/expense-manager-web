import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldDirective } from './forms/field.directive';
import { FieldErrorDirective } from './forms/field-error.directive';
import { PendingFieldDirective } from './forms/pending-field.directive';



@NgModule({
  declarations: [FieldDirective, PendingFieldDirective, FieldErrorDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexModule,
    FieldDirective,
    FieldErrorDirective,
    PendingFieldDirective

  ]

})
export class SharedModule { }
