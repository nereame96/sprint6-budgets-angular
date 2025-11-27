export interface Budget {
      id : number;
      nameClient : string;
      email : string;
      phone : string;
      budgetServices : []; //falta enlazarlo con la otra interface 
      totalPrice : number;
      date : Date;


}