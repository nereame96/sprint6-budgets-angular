import { Component, input } from '@angular/core';
import { budgetProduct } from '../../../models/budget-product';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-product-item',
  imports: [ReactiveFormsModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItemComponent {

  product = input.required<budgetProduct>()
  parentForm = input.required<FormGroup>()

}
