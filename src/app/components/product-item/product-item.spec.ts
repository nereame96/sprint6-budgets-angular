import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item';
import { budgetProduct } from '../../../models/budget-product';
import { provideZonelessChangeDetection } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

describe('ProductItem', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;


  const testProduct: budgetProduct = {
    id : '1',
    nameProduct : 'Seo',
    description : 'Develope a complete responsive webside',
    price : 300,
    selected : false
  }

  const mockForm = new FormGroup({
    '1': new FormControl(false),
    '2': new FormControl(false),
    '3': new FormControl(false)
  })


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent, ReactiveFormsModule],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('product', testProduct)
    fixture.componentRef.setInput('parentForm', mockForm)
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive the product input correctly', () => {
    expect(component.product()).toEqual(testProduct)

  })

  it('should show the name of the product (h3) in the HTML', () => {
    const h3 = fixture.nativeElement.querySelector('h3')

    expect(h3.textContent).toBe('Seo')
  })

  it('should show the description of the product (p) in the HTML', () => {
    const pDescription = fixture.nativeElement.querySelector('[data-testid="pDescription"]')

    expect(pDescription.textContent).toBe('Develope a complete responsive webside')
  })


  it('should show the price of the product (p) in the HTML', () => {
    const pPrice = fixture.nativeElement.querySelector('[data-testid="pPrice"]')

    expect(pPrice.textContent).toBe('300 €')
  })

  it('should return true when product is selected in form', () => {
    mockForm.patchValue({'1': true})
    expect(component.isSelected()).toBe(true)

  })

  it('should return false when the product is not selected', () => {
    mockForm.patchValue({'1': false})
    expect(component.isSelected()).toBe(false)
  })


});
