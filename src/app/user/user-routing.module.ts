import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { RegisterViewComponent } from './components/register-view/register-view.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegisterViewComponent },
  { path: '', component: UserViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
