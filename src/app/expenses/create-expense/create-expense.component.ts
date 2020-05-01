import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(30)], null,
      {
        required: '[name] is required', maxLength: 'The maximun length for [name] is {requiredLength}'
      }],
    ammount: ['', [Validators.min(1), Validators.required], null, { min: 'The <b>Ammount</b> must be greater than {min}' }],
    description: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseService
  ) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.expenseService.createExpense(this.form.getRawValue()).subscribe(() => alert('saved'));
  }

}
