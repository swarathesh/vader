import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './recipes/recipes-item/recipes-item.component';
import { DropdownDirective } from './directive/dropdown.directive';
import { ShoppingService } from './services/shopping.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    ShoppingComponent,
    ShoppingEditComponent,
    RecipesItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]

  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
