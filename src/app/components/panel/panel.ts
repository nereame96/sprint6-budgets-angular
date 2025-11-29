import { Component, input, signal, WritableSignal } from '@angular/core';
import { budgetProduct } from '../../../models/budget-product';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class PanelComponent {

  grandparentForm = input.required<FormGroup>()

  counterValuePages = signal(0)
  counterValueLanguages = signal(0)

  increment(controlName : string) {
    const control = this.grandparentForm().get(controlName)
    const currentValue = control?.value || 0
    control?.setValue(currentValue + 1)

  }
  decrement(controlName : string) {
    const control = this.grandparentForm().get(controlName)
    const currentValue = control?.value || 0

    if (currentValue > 0) {
      control?.setValue(currentValue - 1)

    }

  }




}
