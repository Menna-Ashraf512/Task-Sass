import { Routes } from '@angular/router';
import { HomeComponent } from './Feature/pages/home/home.component';
import { AllMealsComponent } from './Feature/pages/home/components/all-meals/all-meals.component';
import { ListitemComponent } from './Feature/pages/listitem/listitem.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
export const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent, title: 'home page' },
        { 
            path: 'meals', 
            component: ListitemComponent,  
            children: [
                { path: 'all', component: AllMealsComponent }
            ] 
        },
        { path: '**', component: NotFoundComponent }
    ];
    
