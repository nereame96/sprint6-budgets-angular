import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsListComponent } from './budgets-list';

describe('BudgetsList', () => {
  let component: BudgetsListComponent;
  let fixture: ComponentFixture<BudgetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should start with the 3 budgets of the budget list', () => {
    expect(component.budgets().length).toBe(3)
  })
});
