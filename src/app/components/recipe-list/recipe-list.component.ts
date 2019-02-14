import { Component } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent {
  recipes: Recipe[];
  recipe_in_progress: Recipe;
  current_classes: any;
  current_style: any;
  constructor() {
    this.recipe_in_progress = Recipe.createBlank();

    this.current_classes = { darkbg: false };

    this.current_style = { 'font-size': false };

    this.recipes = [
      new Recipe(
        "Banana Bread",
        "This is a sample banana bread recipe",
        40,
        50,
        null,
        null,
        null
      ),
      new Recipe(
        "Herman Tofu",
        "Tofu is made of Soya milk",
        10,
        20,
        null,
        null,
        null
      ),
      new Recipe(
        "Butter Chick",
        "Bengali butter chicken",
        50,
        100,
        null,
        null,
        null
      )
    ];
  }

  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

  public zoomInOnRecipe(recipe) {
    console.log(JSON.stringify(recipe, null, 2));
  }

  public toggleBackGround() {
    const newValue = !this.current_classes['darkbg'];
    this.current_classes = { darkbg: newValue };
  }

  public toggleFontSize() {
    if (this.current_style['font-size'] === '150%') {
      this.current_style['font-size'] = '175%';
    } else {
      this.current_style['font-size'] = '150%';
    }
  }
}
