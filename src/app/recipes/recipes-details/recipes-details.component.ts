import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
 
  isOpen = true;

  @Input() recipe: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  
  }


  isOpened() {
    this.isOpen = !this.isOpen;
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingridients); 
    this.isOpen = !this.isOpen;
  }
}
