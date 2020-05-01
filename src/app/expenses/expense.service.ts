import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private httpClient: HttpClient) { }

  createExpense(expense: any): Observable<any> {
    return this.httpClient.post('expenses', expense);
  }
}
