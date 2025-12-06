import { budgetProduct } from "./budget-product";

export interface Budget {
      id : number;
      nameClient : string;
      email : string;
      phone : string;
      budgetServices : budgetProduct[];
      pagesQty : number;
      languagesQty : number;
      totalPrice : number;
      date : Date;


}
