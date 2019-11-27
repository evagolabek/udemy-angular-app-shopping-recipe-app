import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';


export class RecipeService {
  recipeSelected = new EventEmitter
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'some test recipe', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}