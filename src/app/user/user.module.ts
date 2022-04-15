import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { RegisterViewComponent } from './components/register-view/register-view.component';
import { ForgotPasswordViewComponent } from './components/forgot-password-view/forgot-password-view.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    LoginViewComponent,
    RegisterViewComponent,
    ForgotPasswordViewComponent,
    UserViewComponent,
    UserProfileComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
})
export class UserModule {}
