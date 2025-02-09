import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IListMeals } from '../../../../../listMeals';
import { MealsByNameService } from '../../../../../shared/sevices/meals_ByName/meals-by-name.service';
import { MealByNameComponent } from "../../../../../shared/component/meal_ui/meal-by-name/meal-by-name.component";
import { PlaceholderItemComponent } from "../../../../../shared/component/meal_ui/placeholder-item/placeholder-item.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breakfast',
  imports: [MealByNameComponent, PlaceholderItemComponent],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.scss'
})

export class BreakfastComponent implements OnInit {

  meals:IListMeals[]=[]
    private subscription!: Subscription;
  
    ngOnInit(): void {
      this.getCategory('breakfast')
    }
    constructor(private readonly _mealsByNameService:MealsByNameService) {}
  

    getCategory(category:string){
      this.subscription=this._mealsByNameService.getMealsByName(category).subscribe({
        next:(res)=>{
          this.meals = res.meals;
          console.log(this.meals)
        },
        error:(error)=>{
          console.log(error)
        }
      })
    }


    
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); 
      console.log('Subscription Unsubscribed');
    }
  }

}
