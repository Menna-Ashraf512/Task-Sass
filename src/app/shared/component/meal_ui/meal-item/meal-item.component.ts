import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAllMeals } from '../../../interface/AllMeals/iall-meals';
import { AllMealsService } from '../../../sevices/meals_Services/all-meals.service';

@Component({
  selector: 'app-meal-item',
  imports: [],
  templateUrl: './meal-item.component.html',
  styleUrl: './meal-item.component.scss'
})
export class MealItemComponent implements OnInit{
  AllMeals:IAllMeals[]=[]

  ngOnInit(): void {
      return this.getAllCategory()
  }


  constructor(private readonly _allMealsService:AllMealsService){}

  getAllCategory(){
    this._allMealsService.getAllMeals().subscribe({
      next:(res)=>{
        this.AllMeals = res.meals;
        console.log(this.AllMeals)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
