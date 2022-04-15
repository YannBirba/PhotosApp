import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login } from 'src/models/auth.model';
import { User } from 'src/models/user.model';
import { AuthService } from 'src/shared/services/auth/auth.service';
import { login } from 'src/shared/state/auth/auth.actions';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent{
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ currentUser: User }>
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        'admin@admin.fr',
        [Validators.required, Validators.email, Validators.minLength(3)],
      ],
      password: ['admin', [Validators.required, Validators.minLength(4)]],
    });
  }
  onSubmit(): void {
    const formData: Login = this.loginForm.value;
    this.store.dispatch(login({ login: formData }));
  }
}
