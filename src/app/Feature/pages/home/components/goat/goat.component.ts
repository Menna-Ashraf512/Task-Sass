import { Component } from '@angular/core';
import { MealsByNameService } from '../../../../../shared/sevices/meals_ByName/meals-by-name.service';
import { Subscription } from 'rxjs';
import { IListMeals } from '../../../../../listMeals';
import { PlaceholderItemComponent } from "../../../../../shared/component/meal_ui/placeholder-item/placeholder-item.component";

@Component({
  selector: 'app-goat',
  imports: [PlaceholderItemComponent],
  templateUrl: './goat.component.html',
  styleUrl: './goat.component.scss'
})
export class GoatComponent {
 meals:IListMeals[]=[]
    private subscription!: Subscription;
  
    ngOnInit(): void {
      this.getCategory('goat')
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
