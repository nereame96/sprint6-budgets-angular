import { TestBed } from '@angular/core/testing';

import { TotalBudget } from './total-budget';

describe('TotalBudget', () => {
  let service: TotalBudget;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalBudget);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
