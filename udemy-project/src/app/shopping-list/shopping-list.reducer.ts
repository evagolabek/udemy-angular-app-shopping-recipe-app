import { Ingredient } from '../shared/ingredient.model';
import { Action } from '@ngrx/store';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ]
}

export function shoppingListReducer(state = initialState, action: Action) {
  switch(action.type) {
    case 'ADD-INGREDIENT' :
    return {
      ...state,
      ingredients: [...state.ingredients, action]
    }
  }
}