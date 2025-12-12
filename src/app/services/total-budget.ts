import { Injectable, signal } from '@angular/core';
import { budgetProducts } from "./../data/budget-products.data";
import { Budget } from '../../models/budget';

@Injectable({
  providedIn: 'root',
})
export class TotalBudget {

  private readonly extraPriceWeb = 30;

  budgetList = signal<Budget[]>([{
        id : 1,
        nameClient : 'Paula',
        email : 'paula@gmail.com',
        phone : '123456789',
        budgetServices : [{

                  id : '1',
                  nameProduct : 'Seo',
                  description : 'Develope a complete responsive webside',
                  price : 300,
                  selected : true
        }],
        pagesQty : 1,
        languagesQty : 1,
        totalPrice : 300,
        date : new Date('2025-01-15T14:00:00Z'),

  },

  {
        id : 2,
        nameClient : 'Jordi',
        email : 'jordi@gmail.com',
        phone : '987654321',
        budgetServices : [{

                  id : '2',
                  nameProduct : 'Ads',
                  description : 'Develope a complete responsive webside',
                  price : 400,
                  selected : true
        }],
        pagesQty : 1,
        languagesQty : 1,
        totalPrice : 400,
        date : new Date('2025-07-01T14:00:00Z'),
  },

  {
        id : 3,
        nameClient : 'Carme',
        email : 'carme@gmail.com',
        phone : '777654321',
        budgetServices : [{

                id : '3',
                  nameProduct : 'Web',
                  description : 'Develope a complete responsive webside',
                  price : 530,
                  selected : true
        }],
        pagesQty : 1,
        languagesQty : 1,
        totalPrice : 530,
        date : new Date('2025-11-22T14:00:00Z'),
  },


])



  getProductPrice(productId: string) : number {

    const product = budgetProducts.find( product => product.id === productId )
    return product?.price || 0
  }

  calculateBaseTotal( selectedProductIds : string[]) : number {

    return selectedProductIds.reduce(( acc , id) => {
      return acc + this.getProductPrice(id) } , 0 )
  }

  calculateExtraWebCost (pages : number, languages : number) : number {
    return pages * languages * this.extraPriceWeb
  }

  calculateTotalBudget ( selectedProductIds : string[], pages : number, languages : number ) {

   let total = this.calculateBaseTotal(selectedProductIds)


    if ( selectedProductIds.includes('3')) {  // 3 => web
      total += this.calculateExtraWebCost(pages, languages)
    }

    return total
  }

  saveBudget(budget: Budget): void {
    this.budgetList.update(list => [...list, budget])
  }

}
