import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();



  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Potatoes', 15),
        new Ingredient('Onions', 20),
      ]
    ),
    new Recipe(
      'A Tes2 Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Potatoes', 15),
        new Ingredient('Onions', 20),
      ]
    ),
    new Recipe(
      'A new Recipe,',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Potatoes', 15),
        new Ingredient('Onions', 20),
      ]
    ),
  ];

  constructor(private shoppingService:ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      this.shoppingService.addIngredient(ingredient);
    });
  }
}
