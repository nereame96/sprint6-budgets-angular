import { ProductItemComponent } from './../product-item/product-item';
import { budgetProduct } from "./../../../models/budget-product"
import { Component, signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { budgetProducts } from "./../../data/budget-products.data";
import { TotalBudget } from '../../services/total-budget';


@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule, ProductItemComponent],
  templateUrl: './budget.html',
  styleUrl: './budget.scss',
})


export class Budget {

  private totalBudgetService = inject(TotalBudget)

  budgetProducts = signal<budgetProduct[]>(budgetProducts);

  form = new FormGroup ({
    '1' : new FormControl(false),
    '2' : new FormControl(false),
    '3' : new FormControl(false),
    'pages' : new FormControl(0),
    'languages' : new FormControl(0)

  })

  formValues = toSignal(this.form.valueChanges, {
    initialValue : this.form.value
  })

  sumTotal = computed(() => {

    const values = this.formValues()

    const selectedProducts = Object.keys(values)
      .filter(key => [ '1', '2', '3' ].includes(key) && values[key as keyof typeof values] === true);

    const pages = values.pages || 0
    const languages = values.languages || 0

    return this.totalBudgetService.calculateTotalBudget( selectedProducts, pages, languages)
  })







}
