import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundViewComponent } from './components/not-found-view/not-found-view.component';

const routes: Routes = [
  { path: '', component: NotFoundViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
