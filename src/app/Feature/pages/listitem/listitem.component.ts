import { Component, OnInit,inject,HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AllMealsService } from '../../../shared/sevices/meals_Services/all-meals.service';
import { MealsByNameService } from '../../../shared/sevices/meals_ByName/meals-by-name.service';
import { IMeal } from '../../../shared/interface/Meal/imeal';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf,DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-listitem',
  imports: [RouterLink,RouterLinkActive,RouterOutlet,FormsModule,NgIf],
  templateUrl: './listitem.component.html',
  styleUrl: './listitem.component.scss'
})
export class ListitemComponent implements OnInit {
  meals:IMeal[]=[]
  private document = inject(DOCUMENT); 
  isSmallScreen = false;
  selectedCategory = '';


    constructor(private _allMealsService:AllMealsService , private _mealsByNameService:MealsByNameService , private router:Router
    ) {}
  
    ngOnInit(): void {
      if (typeof window !== 'undefined') {
        this.getCategory()
    }
  }
    getCategory(){
      this._mealsByNameService.getMealsByName("breakfast").subscribe({
        next:(res)=>{
          this.meals = res.meals;
        },
        error:(error)=>{
          console.log(error)
        }
      })
    }

    getAllMeals(){
      this._allMealsService.getAllMeals().subscribe({
        next:(res)=>{
          console.log(res)
        }
      })
    }


  
    navigateToCategory() {
      if (this.selectedCategory) {
        this.router.navigateByUrl(this.selectedCategory); 
      }
    }
    @HostListener('window:resize', ['$event'])
    onResize() {
      this.checkScreenSize();
    }
  
    private checkScreenSize() {
      const windowRef = this.document.defaultView; // مرجع إلى window
      this.isSmallScreen = windowRef ? windowRef.innerWidth < 855 : false;
    }
}
