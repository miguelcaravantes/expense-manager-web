import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: [''],
    ammount: [''],
    description: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  save(): void {
    alert(JSON.stringify(this.form.getRawValue()));
  }

}
