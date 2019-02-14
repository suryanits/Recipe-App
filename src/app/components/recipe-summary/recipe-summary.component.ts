import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../..//model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent {
  @Input()
  recipe: Recipe;

  @Output()
  zoonIn: EventEmitter<Recipe> = new EventEmitter();

  constructor() {}

  public zoomClicked() {
    console.log('zoomInClicked()');
    this.zoonIn.emit(this.recipe);
  }
}
