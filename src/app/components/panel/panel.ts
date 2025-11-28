import { Component, input, signal, WritableSignal } from '@angular/core';
import { budgetProduct } from '../../../models/budget-product';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class PanelComponent {

  counterValuePages = signal(0)
  counterValueLanguages = signal(0)

  increment(valueToUpdate : WritableSignal<number>) {
    valueToUpdate.update(value => value + 1)
  }
  decrement(valueToUpdate : WritableSignal<number>) {
if (valueToUpdate() > 0) {
  valueToUpdate.update(value => value - 1)

}
  }



}
