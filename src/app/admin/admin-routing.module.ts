import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { EventAdminViewComponent } from './components/event-admin-view/event-admin-view.component';
import { GroupAdminViewComponent } from './components/group-admin-view/group-admin-view.component';
import { ImageAdminViewComponent } from './components/image-admin-view/image-admin-view.component';
import { UserAdminViewComponent } from './components/user-admin-view/user-admin-view.component';

const routes: Routes = [
  { path: '', component: AdminViewComponent },
  { path: 'user', component: UserAdminViewComponent },
  { path: 'group', component: GroupAdminViewComponent },
  { path: 'event', component: EventAdminViewComponent },
  { path: 'image', component: ImageAdminViewComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
