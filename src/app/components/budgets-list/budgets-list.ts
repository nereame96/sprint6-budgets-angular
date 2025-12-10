import { Component, inject, signal, computed, input } from '@angular/core';
import { TotalBudget } from '../../services/total-budget';
import { DatePipe } from '@angular/common';
import { Budget } from '../../../models/budget';

@Component({
  selector: 'app-budgets-list',
  imports: [DatePipe],
  templateUrl: './budgets-list.html',
  styleUrl: './budgets-list.scss',
})
export class BudgetsListComponent {

  private totalBudgetService = inject(TotalBudget)

  budgets = this.totalBudgetService.budgetList

  searchNameInput = signal('')


  sortBy = signal<'date' | 'price' | 'name'>('date')


  sortedBudgets = computed(() => {

    const budgetArray = this.budgets()
    const sort = this.sortBy()

    switch (sort) {
      case 'date':
        return this.orderByDate(budgetArray);

      case 'price':
        return this.orderByPrice(budgetArray);

      case 'name':
        return this.orderByName(budgetArray);

    }
  })

  setSortByDate() {
  this.sortBy.set('date')
}

setSortByPrice() {
  this.sortBy.set('price')
}

setSortByName() {
  this.sortBy.set('name')

}

setSearchNameInput(){
  this.searchNameInput.set(input)
}

filterName = computed(() => {

  const budgetArray = this.budgets()

  return budgetArray.filter()
})





  orderByDate(budgetArray: Budget[] ) {

    return  budgetArray.toSorted((a, b) => b.date.getTime() - a.date.getTime())
  }

  orderByPrice(budgetArray: Budget[] ) {

    return  budgetArray.toSorted((a, b) => b.totalPrice - a.totalPrice)
  }

  orderByName(budgetArray: Budget[] ) {

    return  budgetArray.toSorted((a, b) => a.nameClient.localeCompare(b.nameClient))
  }

  }



