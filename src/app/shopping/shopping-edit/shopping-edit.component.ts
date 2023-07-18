import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

 @ViewChild('name',{static:false}) nameInput:ElementRef;

 @ViewChild('amount',{static:false}) amountInput:ElementRef;

 @Output() itemAdded =new EventEmitter<Ingredient>();


 onAddItem() {
  this.itemAdded.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
 }

}
