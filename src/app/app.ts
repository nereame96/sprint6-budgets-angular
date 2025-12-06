import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home";
import { BudgetComponent } from "./components/budget/budget";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, BudgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sprint6-butgets-angular');
}
