import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { UserAdminViewComponent } from './components/user-admin-view/user-admin-view.component';
import { ImageAdminViewComponent } from './components/image-admin-view/image-admin-view.component';
import { GroupAdminViewComponent } from './components/group-admin-view/group-admin-view.component';
import { EventAdminViewComponent } from './components/event-admin-view/event-admin-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './components/event-list/event-list.component';


@NgModule({
  declarations: [
    AdminViewComponent,
    UserAdminViewComponent,
    ImageAdminViewComponent,
    GroupAdminViewComponent,
    EventAdminViewComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
