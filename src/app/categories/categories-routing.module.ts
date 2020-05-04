
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';

const routes: Routes = [{
  path: 'categories/create',
  component: CreateCategoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
