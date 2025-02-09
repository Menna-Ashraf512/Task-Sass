import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './shared/services/flowbite.service';
import { SideBarComponent } from "./core/layout/side-bar/side-bar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SideBarComponent, FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Recipe';
  flowbiteService =inject(FlowbiteService)
  constructor() {}

  ngOnInit(): void {
    initFlowbite()
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }

}
