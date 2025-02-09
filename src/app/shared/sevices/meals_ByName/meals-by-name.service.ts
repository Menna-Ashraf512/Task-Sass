import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsByNameService {

  constructor(private readonly _httpClient:HttpClient) { }

  getMealsByName(category:string):Observable<any>{
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  }
  
  }
    
