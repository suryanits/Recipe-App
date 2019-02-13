import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
        new Recipe('Banana Bread', 'This is a sample banana bread recipe', null, null, null),
        new Recipe('Herman Tofu', 'Tofu is made of Soya milk', null, null, null),
        new Recipe('Butter Chick', 'Bengali butter chicken', null, null, null)
    ];
  }
}
