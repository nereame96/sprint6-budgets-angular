import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetComponent } from './budget';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { TotalBudget } from '../../services/total-budget';

describe('Budget', () => {
  let component: BudgetComponent;
  let fixture: ComponentFixture<BudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetComponent],
      providers: [
        provideRouter([]),
        provideLocationMocks()
      ]

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

  it('should have product form with correct controls', () => {
    expect(component.form.get('1')).toBeTruthy()
    expect(component.form.get('2')).toBeTruthy()
    expect(component.form.get('3')).toBeTruthy()
    expect(component.form.get('pages')).toBeTruthy()
    expect(component.form.get('languages')).toBeTruthy()

  })

  it('should have client form with correct controls', () => {
    expect(component.clientForm.get('nameClient')).toBeTruthy()
    expect(component.clientForm.get('email')).toBeTruthy()
    expect(component.clientForm.get('phone')).toBeTruthy()

  })

  it('should calculate total when service is selected', () => {
    component.form.patchValue({'1': true})

    expect(component.sumTotal()).toBe(300)
  })

  it('should not save budget without selected services', () => {
    const totalBudgetService = TestBed.inject(TotalBudget)

    component.clientForm.patchValue({
      nameClient: 'test',
      email: 'test@gmail.com',
      phone: '123456789'
    })

    component.saveBudget()

    expect(component.message()).toBe('Please select at least one service')
    expect(totalBudgetService.budgetList().length).toBe(3)
  })
});
