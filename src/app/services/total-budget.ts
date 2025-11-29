import { Injectable } from '@angular/core';
import { budgetProducts } from "./../data/budget-products.data";

@Injectable({
  providedIn: 'root',
})
export class TotalBudget {

  private readonly extraPriceWeb = 30;

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

}
