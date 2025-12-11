import { ProductItemComponent } from './../product-item/product-item';
import { budgetProduct } from "./../../../models/budget-product"
import { Component, signal, computed, inject, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators, Form } from "@angular/forms";
import { budgetProducts } from "./../../data/budget-products.data";
import { TotalBudget } from '../../services/total-budget';
import { Budget } from '../../../models/budget';
import { BudgetsListComponent } from '../budgets-list/budgets-list';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule, ProductItemComponent, BudgetsListComponent ],
  templateUrl: './budget.html',
  styleUrl: './budget.scss',
})


export class BudgetComponent {

  private totalBudgetService = inject(TotalBudget)
  private fb = inject(FormBuilder)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  budgetProducts = signal<budgetProduct[]>(budgetProducts);

  budgetList = signal<Budget[]>([])


  message = signal('')

  printMessage(text: string){
    this.message.set(text)

  }

  form = new FormGroup ({
    '1' : new FormControl(false),
    '2' : new FormControl(false),
    '3' : new FormControl(false),
    'pages' : new FormControl(1),
    'languages' : new FormControl(1)

  })

  formValues = toSignal(this.form.valueChanges, {
    initialValue : this.form.value
  })

  constructor() {
  effect(() => {
    const values = this.formValues()

    const queryParams = {
      seo: values['1'],
      ads: values['2'],
      web: values['3'],
      pages: values.pages,
      languages: values.languages
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'replace'
    })


  })

}

ngOnInit()  {

      const params = this.route.snapshot.queryParams

      if (Object.keys(params).length > 0) {
          this.form.patchValue( {
          '1': params['seo'] === 'true',
          '2': params['ads'] === 'true',
          '3': params['web'] === 'true',
          pages: parseInt(params['pages'] ) || 1,
          languages: parseInt(params['languages'] ) || 1,
      });
    }
}



  selectedProducts = computed(() => {
     const values = this.formValues()

     return this.budgetProducts().filter(product =>
      values[product.id as keyof typeof values ] === true
     )
  })

  sumTotal = computed(() => {

    const values = this.formValues()

    const selectedProducts = Object.keys(values)
      .filter(key => [ '1', '2', '3' ].includes(key) && values[key as keyof typeof values] === true);

    const pages = values.pages || 1
    const languages = values.languages || 1

    return this.totalBudgetService.calculateTotalBudget( selectedProducts, pages, languages)
  })



  clientForm: FormGroup = this.fb.group({
    nameClient: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s-]+$')] ],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]]
  })

  get nameClient() {
    return this.clientForm.get('nameClient')
  }
  get email() {
    return this.clientForm.get('email')
  }
  get phone() {
    return this.clientForm.get('phone')
  }



  saveBudget() {

    if (this.selectedProducts().length === 0){
      this.printMessage('Please select at least one service')
      return
    }

    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched()
      return;
    }

      const values = this.formValues()

      const clientDetails = this.clientForm.value

      const newBudget: Budget = {

        id: Date.now(),
        nameClient: clientDetails.nameClient,
        email: clientDetails.email,
        phone: clientDetails.phone,
        budgetServices : this.selectedProducts(),
        pagesQty: values.pages || 1,
        languagesQty: values.languages || 1,
        totalPrice : this.sumTotal(),
        date : new Date()

      }

      // this.budgetList.update(list => [...list, newBudget])

      this.totalBudgetService.saveBudget(newBudget)

      this.form.reset({
        '1': false,
        '2': false,
        '3': false,
        'pages': 1,
        'languages': 1
      })

      this.clientForm.reset()

      console.log(newBudget)
      console.log(this.totalBudgetService.budgetList())
    }






}
