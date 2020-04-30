import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ExpensesModule } from './expenses/expenses.module';
import { FormBuilder } from '@angular/forms';
import { FormBuilderService } from './core/forms/form-builder.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    DashboardModule,
    ExpensesModule,
  ],
  providers:
    [
      { provide: FormBuilder, useClass: FormBuilderService },
      FormBuilderService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
