import { Component, Input, signal} from '@angular/core';
import { MealItemComponent } from "../../../../../shared/component/meal_ui/meal-item/meal-item.component";
import { PlaceholderItemComponent } from '../../../../../shared/component/meal_ui/placeholder-item/placeholder-item.component';
import { IAllMeals } from '../../../../../shared/interface/AllMeals/iall-meals';
import { AllMealsService } from '../../../../../shared/sevices/meals_Services/all-meals.service';
import { Subscription } from 'rxjs';
import { MealsByNameService } from '../../../../../shared/sevices/meals_ByName/meals-by-name.service';
import { IMeal } from '../../../../../shared/interface/Meal/imeal';
import { MealByNameComponent } from "../../../../../shared/component/meal_ui/meal-by-name/meal-by-name.component";

@Component({
  selector: 'app-all-meals',
  imports: [MealByNameComponent, PlaceholderItemComponent],
  templateUrl: './all-meals.component.html',
  styleUrl: './all-meals.component.scss'
})
export class AllMealsComponent {
  
  constructor(private readonly _mealsByNameService: MealsByNameService) {}

  @Input() public selectedCategory: string = 'Beef';
  meals = signal<IMeal[]>([]);
  isLoading = signal<boolean>(false);

  ngOnInit() {
    this.updateMeals();
  }

  ngOnChanges() {
    this.updateMeals();
  }

  private updateMeals() {
    this.isLoading.set(true);
    this._mealsByNameService.getMealsByName(this.selectedCategory).subscribe({
      next: (res) => {
        this.meals.set(res.meals || []);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error(error);
        this.isLoading.set(false);
      }
    });
  }
}