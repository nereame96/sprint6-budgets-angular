import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetComponent } from './budget';

describe('Budget', () => {
  let component: BudgetComponent;
  let fixture: ComponentFixture<BudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with budgetProducts array', ()  => {
    expect(component.budgetProducts().length).toBe(3)
    expect(component.budgetProducts()[0].id).toBe("1")  })
});
