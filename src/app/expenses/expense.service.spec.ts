import { TestBed } from '@angular/core/testing';

import { ExpenseService } from './expense.service';
import { HttpClientModule } from '@angular/common/http';

describe('ExpenseService', () => {
  let service: ExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(ExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
