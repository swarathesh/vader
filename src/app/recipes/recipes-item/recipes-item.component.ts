import { Component ,Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit,OnChanges {

  @Input()recipe: Recipe;



  constructor(private recipeServices: RecipeService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

 onClick(){
  this.recipeServices.recipeSelected.emit(this.recipe);
 }

  ngOnInit(): void {

  }




}
