import { NgModule } from '@angular/core';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CreateExpenseComponent],
  imports: [
    SharedModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
