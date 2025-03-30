import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMeal } from '../../../interface/Meal/imeal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meal-by-name',
  imports: [CommonModule],
  templateUrl: './meal-by-name.component.html',
  styleUrls: ['./meal-by-name.component.scss']
})
export class MealByNameComponent {
  @Input() meals!: IMeal[];

  meal = signal<any[]>([]);
  videoUrl = signal<string | null>(null);

  constructor(private http: HttpClient) {}



 showVideo(index: number) {
  const meal = this.meals[index];

  if (!meal || !meal.idMeal) {
    console.error('Meal ID غير موجود:', meal);
    return;
  }

  // استدعاء API للحصول على تفاصيل الطبق (بما في ذلك strYoutube)
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`;
  
  this.http.get<any>(apiUrl).subscribe(response => {
    if (response.meals && response.meals.length > 0) {
      const fullMeal = response.meals[0]; // جلب تفاصيل الوجبة الكاملة
      if (fullMeal.strYoutube) {
        window.open(fullMeal.strYoutube, '_blank'); // فتح الفيديو في تبويب جديد
      } else {
        console.warn('لا يوجد فيديو لهذه الوصفة:', fullMeal);
      }
    } else {
      console.error('تعذر العثور على تفاصيل الوجبة.');
    }
  });
}

  
  

}
