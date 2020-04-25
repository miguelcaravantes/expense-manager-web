import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateExpenseComponent } from './create-expense/create-expense.component';


const routes: Routes = [{
  path: 'expenses/create',
  component: CreateExpenseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
