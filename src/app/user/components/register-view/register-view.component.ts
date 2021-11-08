import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MustMatch } from 'src/shared/helpers/must-match.validator';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnDestroy{
  public registerForm: FormGroup;
  private subscription: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      password_confirmation: ['', Validators.required,Validators.minLength(6),    {validator: MustMatch('password', 'password_confirmation')
    },],
      is_admin: [false],

    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(): void {
    const formData: any = this.registerForm.value;
    const response$: Observable<any> = this.authService.register(formData);
    this.subscription = response$.subscribe(
      (response) => console.log(response),
      (responseError) => console.error(responseError),
      () => console.log('DONE!')
    );
  }
}
