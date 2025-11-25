import { Service } from './../../models/service';
import { Component, signal } from '@angular/core';




export const Services : Service[] = [

  { id : 1,
    nameService : 'seo',
    price : 300,
    selected : false
  },

  { id : 2,
    nameService : 'ads',
    price : 400,
    selected : false
  },

  { id : 3,
    nameService : 'web',
    price : 500,
    selected : false
  }

]



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})


export class HomeComponent {

  services = signal<Service[]>(Services);
}
