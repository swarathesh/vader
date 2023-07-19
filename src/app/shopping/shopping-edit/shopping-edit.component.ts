import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements  OnInit{

constructor(private shoppingService: ShoppingService) { }

 ngOnInit(): void {

 }

 @ViewChild('name',{static:false}) nameInput:ElementRef;

 @ViewChild('amount',{static:false}) amountInput:ElementRef;


 onAddItem() {
   this.shoppingService.addIngredient(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
 }

}
