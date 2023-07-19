import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  ingridientsChanged = new EventEmitter<Ingredient[]>();

  private  ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10),
    new Ingredient('Potatoes',15),
    new Ingredient('Onions',20)
  ];


  getIngredients() {
    return this.ingredients.slice();
   }

    addIngredient(ingredient:Ingredient) {
      this.ingredients.push(ingredient);
      this.ingridientsChanged.emit(this.ingredients.slice());
    }


}
