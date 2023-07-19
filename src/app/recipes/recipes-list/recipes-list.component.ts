import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent  implements OnInit{



  constructor(private recipeServices: RecipeService) { }


  ngOnInit(): void {
    this.recipes = this.recipeServices.getRecipes();
  }


  recipes:Recipe[] ;




}
