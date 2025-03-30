import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { AllMealsService } from '../../../shared/sevices/meals_Services/all-meals.service';
import { MealsByNameService } from '../../../shared/sevices/meals_ByName/meals-by-name.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listitem',
  imports: [FormsModule],
  templateUrl: './listitem.component.html',
  styleUrl: './listitem.component.scss'
})
export class ListitemComponent  {



    constructor(private _allMealsService:AllMealsService , private _mealsByNameService:MealsByNameService , private router:Router
    ) {}
  
    categories: string[] = ['Beef','breakfast', 'Chicken', 'Dessert', 'Pasta', 'Seafood','side','vegan','vegetarian','starter','pork','pasta','miscellaneous','lamb','goat'];
    selectedCategory: string = 'Beef';
    @Output() categorySelected = new EventEmitter<string>();

    selectCategory(category: string) {
      this.selectedCategory = category;
      this.categorySelected.emit(category);
    }
  }
