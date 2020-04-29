import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(30)], null,
      {
        required: 'Name is required', maxLength: 'The maximun length for Name is {requiredLength}'
      }],
    ammount: ['', [Validators.min(1)], null, { min: 'The ammount must be greater than {min}' }],
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
