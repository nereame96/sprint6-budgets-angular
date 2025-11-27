import { budgetProduct } from "./../../models/budget-product";
import { Component, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";

export const budgetProducts : budgetProduct[] = [

  { id : '1',
    nameProduct : 'seo',
    price : 300,
    selected : false
  },

  { id : '2',
    nameProduct : 'ads',
    price : 400,
    selected : false
  },

  { id : '3',
    nameProduct : 'web',
    price : 500,
    selected : false
  }

]


@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule],
  templateUrl: './budget.html',
  styleUrl: './budget.scss',
})


export class Budget {

  budgetProducts = signal<budgetProduct[]>(budgetProducts);

  form = new FormGroup ({
    '1' : new FormControl(false),
    '2' : new FormControl(false),
    '3' : new FormControl(false),

  })

  formValues = toSignal(this.form.valueChanges, {
    initialValue : { '1' : false, '2' : false, '3' : false }
  })

  value =  this.formValues()



  sumTotal = computed(() => {
    const values = this.formValues()
    let total = 0

    for (const product of this.budgetProducts()) {
      const productValue = values[product.id as '1' | '2' | '3'];
      if (productValue) {
        total += product.price
      }
    }
    return total
  });


}
