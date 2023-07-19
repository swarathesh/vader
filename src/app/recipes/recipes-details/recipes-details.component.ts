import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent {
  isOpen = true;

  @Input() recipe: Recipe;


  isOpened() {
    this.isOpen = !this.isOpen;
  }
}
