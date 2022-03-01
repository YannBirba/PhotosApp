import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [  
    HomeViewComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
})
export class HomeModule { }