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

  counterValuePages = signal(1)
  counterValueLanguages = signal(1)

  increment(controlName : string) {
    const control = this.grandparentForm().get(controlName)
    const currentValue = control?.value || 1
    control?.setValue(currentValue + 1)

  }
  decrement(controlName : string) {
    const control = this.grandparentForm().get(controlName)
    const currentValue = control?.value || 1

    if (currentValue > 1) {
      control?.setValue(currentValue - 1)

    }

  }




}
