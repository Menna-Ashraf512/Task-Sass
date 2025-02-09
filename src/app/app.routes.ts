import { Routes } from '@angular/router';
import { HomeComponent } from './Feature/pages/home/home.component';
import { AllMealsComponent } from './Feature/pages/home/components/all-meals/all-meals.component';
import { BreakfastComponent } from './Feature/pages/home/components/breakfast/breakfast.component';
import { ListitemComponent } from './Feature/pages/listitem/listitem.component';
import { BeefComponent } from './Feature/pages/home/components/beef/beef.component';
import { ChickenComponent } from './Feature/pages/home/components/chicken/chicken.component';
import { DessertComponent } from './Feature/pages/home/components/dessert/dessert.component';
import { GoatComponent } from './Feature/pages/home/components/goat/goat.component';
import { LambComponent } from './Feature/pages/home/components/lamb/lamb.component';
import { MiscellaneousComponent } from './Feature/pages/home/components/miscellaneous/miscellaneous.component';
import { PastaComponent } from './Feature/pages/home/components/pasta/pasta.component';
import { PorkComponent } from './Feature/pages/home/components/pork/pork.component';
import { SeafoodComponent } from './Feature/pages/home/components/seafood/seafood.component';
import { SideComponent } from './Feature/pages/home/components/side/side.component';
import { StarterComponent } from './Feature/pages/home/components/starter/starter.component';
import { VeganComponent } from './Feature/pages/home/components/vegan/vegan.component';
import { VegetarianComponent } from './Feature/pages/home/components/vegetarian/vegetarian.component';

export const routes: Routes = [
    { path: '', redirectTo: 'meals/all', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'home page'},
        { path: 'meals', component:ListitemComponent, children:[
            {path:'all',component:AllMealsComponent},
            {path:'breakfast',component:BreakfastComponent},
            {path:'beef',component:BeefComponent},
            {path:'lamb',component:LambComponent},
            {path:'chicken',component:ChickenComponent},
            {path:'goat',component:GoatComponent},
            {path:'dessert',component:DessertComponent},
            {path:'miscellaneous',component:MiscellaneousComponent},
            {path:'pasta',component:PastaComponent},
            {path:'pork',component:PorkComponent},
            {path:'seafood',component:SeafoodComponent},
            {path:'side',component:SideComponent},
            {path:'starter',component:StarterComponent},
            {path:'vegan',component:VeganComponent},
            {path:'Vegetarian',component:VegetarianComponent},
        ]},
];
