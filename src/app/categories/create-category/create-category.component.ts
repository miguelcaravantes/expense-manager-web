import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

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
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.categoryService.createCategory(this.form.getRawValue()).subscribe(() => alert('saved'));
  }

}
