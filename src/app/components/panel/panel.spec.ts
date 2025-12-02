import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { PanelComponent } from './panel';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Panel', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let mockForm: FormGroup


  beforeEach(async () => {

    const formBuilder = new FormBuilder()
    mockForm = formBuilder.group({
      pages: [0],
      languages: [0]
    })

    await TestBed.configureTestingModule({
      imports: [PanelComponent, ReactiveFormsModule],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();



    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('grandparentForm', mockForm)

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should incremente the control value +1', () => {
    mockForm.patchValue({pages: 5})

    component.increment('pages')
    fixture.detectChanges()

    expect(mockForm.get('pages')?.value).toBe(6)

  })

  it('should decrement the control value -1',() => {
    mockForm.patchValue({pages: 5})

    component.decrement('pages')
    fixture.detectChanges()

    expect(mockForm.get('pages')?.value).toBe(4)


  })

  it ('should not decrement if the control value is 0', () => {
    mockForm.patchValue({pages: 0})

    component.decrement('pages')
    fixture.detectChanges()

    expect(mockForm.get('pages')?.value).toBe(0)


  })

});


