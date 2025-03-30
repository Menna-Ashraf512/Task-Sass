import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './shared/services/flowbite.service';
import { SideBarComponent } from "./core/layout/side-bar/side-bar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { ListitemComponent } from "./Feature/pages/listitem/listitem.component";
import { AllMealsComponent } from "./Feature/pages/home/components/all-meals/all-meals.component";

@Component({
  selector: 'app-root',
  imports: [SideBarComponent, FooterComponent, ListitemComponent, AllMealsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Recipe';
  flowbiteService =inject(FlowbiteService)
  constructor() {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
    initFlowbite()
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
  }


  selectedCategory = 'Beef';

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}
