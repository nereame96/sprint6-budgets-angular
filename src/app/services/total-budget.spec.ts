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

  it('should calculate base total for one service', () => {
    const total = service.calculateBaseTotal(['1'])
    expect(total).toBe(300)
  })

  it('should calculate extra web cost', () => {
    const cost = service.calculateExtraWebCost(2, 3)
    expect(cost).toBe(180)
  })

  it('should calculate total cost', () => {
    const total = service.calculateTotalBudget(['1'], 0, 0)
    expect(total).toBe(300)
  })
});
