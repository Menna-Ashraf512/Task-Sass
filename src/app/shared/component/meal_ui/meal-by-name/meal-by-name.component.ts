import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMeal } from '../../../interface/Meal/imeal';
import { MealsByNameService } from '../../../sevices/meals_ByName/meals-by-name.service';

@Component({
  selector: 'app-meal-by-name',
  imports: [],
  templateUrl: './meal-by-name.component.html',
  styleUrl: './meal-by-name.component.scss'
})
export class MealByNameComponent implements OnInit {
meals:IMeal[]=[]


ngOnInit(): void {
  this.getCategory('breakfast')
}
    constructor(private readonly _mealsByNameService:MealsByNameService) {}

getCategory(category:string){
  this._mealsByNameService.getMealsByName(category).subscribe({
    next:(res)=>{
      this.meals = res.meals;
      console.log(this.meals)
    },
    error:(error)=>{
      console.log(error)
    }
  })
}

}
