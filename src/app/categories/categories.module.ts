import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '@angular/flex-layout';



@NgModule({
  declarations: [CreateCategoryComponent],
  imports: [
    SharedModule
    , CategoriesRoutingModule
  ]
})
export class CategoriesModule { }


