import { Component } from '@angular/core';
import { PlaceholderItemComponent } from "../../../../../shared/component/meal_ui/placeholder-item/placeholder-item.component";
import { IListMeals } from '../../../../../listMeals';
import { Subscription } from 'rxjs';
import { MealsByNameService } from '../../../../../shared/sevices/meals_ByName/meals-by-name.service';

@Component({
  selector: 'app-vegetarian',
  imports: [PlaceholderItemComponent],
  templateUrl: './vegetarian.component.html',
  styleUrl: './vegetarian.component.scss'
})
export class VegetarianComponent {
 meals:IListMeals[]=[]
    private subscription!: Subscription;
  
    ngOnInit(): void {
      this.getCategory('vegetarian')
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
