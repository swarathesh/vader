import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  public ingredients:Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingridientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }
}
