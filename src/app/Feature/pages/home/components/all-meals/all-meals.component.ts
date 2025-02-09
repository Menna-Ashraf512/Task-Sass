import { Component} from '@angular/core';
import { MealItemComponent } from "../../../../../shared/component/meal_ui/meal-item/meal-item.component";
import { PlaceholderItemComponent } from '../../../../../shared/component/meal_ui/placeholder-item/placeholder-item.component';
import { IAllMeals } from '../../../../../shared/interface/AllMeals/iall-meals';
import { AllMealsService } from '../../../../../shared/sevices/meals_Services/all-meals.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-meals',
  imports: [MealItemComponent, PlaceholderItemComponent],
  templateUrl: './all-meals.component.html',
  styleUrl: './all-meals.component.scss'
})
export class AllMealsComponent {
  
  AllMeals:IAllMeals[]=[]
  private subscription!: Subscription;
  ngOnInit(): void {
      return this.getAllCategory()
  }


  constructor(private readonly _allMealsService:AllMealsService){}

  getAllCategory(){
    this.subscription=this._allMealsService.getAllMeals().subscribe({
      next:(res)=>{
        this.AllMeals = res.meals;
        console.log(this.AllMeals)
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
