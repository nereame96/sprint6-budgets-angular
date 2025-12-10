import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { BudgetComponent } from './components/budget/budget';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'budget',
    component: BudgetComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
