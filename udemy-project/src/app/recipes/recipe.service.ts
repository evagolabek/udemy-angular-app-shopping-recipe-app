import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {
  recipeSelected = new EventEmitter
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 
    'some test recipe', 
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg', 
    [new Ingredient('meat', 1),
    new Ingredient( 'garlic', 3)
    ]),
    new Recipe('A test recipe 2 ', 
    'some test recipe 2', 
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg',
    [new Ingredient('meat', 1),
    new Ingredient( 'garlic', 3)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}