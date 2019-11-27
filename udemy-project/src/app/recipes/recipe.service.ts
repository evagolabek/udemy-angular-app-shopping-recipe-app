import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter
  private recipes: Recipe[] = [
    new Recipe('Enchiladas', 
    'Hot enchiladas', 
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg', 
    [new Ingredient('wraps', 1),
    new Ingredient( 'some meat', 3)
    ]),
    new Recipe('Schnitzel', 
    'Super tasty schnitzel', 
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [new Ingredient('meat', 1),
    new Ingredient( 'fries', 20)
    ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}