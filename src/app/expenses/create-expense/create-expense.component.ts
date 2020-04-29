import { CoreValidators } from './../../core/forms/form-validations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormBuilderService } from 'src/app/core/forms/form-builder.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: [  '', [Validators.required], null, {required: 'Name is required'}],
    ammount: ['', [Validators.min(1)], null, {min: 'The ammoun must be greater than 0'}],
    description: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  save(): void {
    alert(JSON.stringify(this.form.getRawValue()));
  }

}
