import { Component, input } from '@angular/core';
import { budgetProduct } from '../../../models/budget-product';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { PanelComponent } from "./../panel/panel";

@Component({
  selector: 'app-product-item',
  imports: [ReactiveFormsModule, PanelComponent],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItemComponent {

  product = input.required<budgetProduct>()
  parentForm = input.required<FormGroup>()

  isSelected() : boolean {
    return this.parentForm().get(this.product().id)?.value || false

  }

}
