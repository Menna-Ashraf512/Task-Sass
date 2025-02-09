import { Component } from '@angular/core';
import { PlaceholderItemComponent } from "../../../../../shared/component/meal_ui/placeholder-item/placeholder-item.component";
import { Subscription } from 'rxjs';
import { IListMeals } from '../../../../../listMeals';
import { MealsByNameService } from '../../../../../shared/sevices/meals_ByName/meals-by-name.service';

@Component({
  selector: 'app-chicken',
  imports: [PlaceholderItemComponent],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.scss'
})
export class ChickenComponent {
meals:IListMeals[]=[]
    private subscription!: Subscription;
  
    ngOnInit(): void {
      this.getCategory('chicken')
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
