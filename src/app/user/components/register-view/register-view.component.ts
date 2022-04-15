import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Register } from 'src/models/auth.model';
import { User } from 'src/models/user.model';
import { confirmationValidator } from 'src/shared/helpers/confirmation.validator';
import { register } from 'src/shared/state/auth/auth.actions';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss'],
})
export class RegisterViewComponent{
  public registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ currentUser: User }>
  ) {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        // password_confirmation: ['', [Validators.required, Validators.minLength(6)]],
        group_id: [null, [Validators.required]],
        is_admin: [false],
      }
      // { validator: [confirmationValidator('password', 'password_confirmation')] }
    );
  }

  onSubmit(): void {
    const formData: Register = this.registerForm.value;
    this.store.dispatch(register({ register: formData }));
  }
}
