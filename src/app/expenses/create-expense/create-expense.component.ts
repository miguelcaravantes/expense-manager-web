import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required], null, { required: 'Name is required' }],
    ammount: ['', [Validators.min(1)], null, { min: 'The ammount must be greater than 0' }],
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
