import { Component ,EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit,OnChanges {

  @Input()recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

 onClick(){
    this.recipeSelected.emit();
 }

  ngOnInit(): void {

  }




}
