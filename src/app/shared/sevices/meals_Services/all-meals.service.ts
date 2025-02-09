import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllMeals } from '../../interface/AllMeals/iall-meals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllMealsService {
  AllMeals:IAllMeals[]=[]
  constructor(private readonly _httpClient:HttpClient) { }
  getAllMeals():Observable<any>{
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  }
}
