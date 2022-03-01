import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent {
  public loginForm: FormGroup;
  private subscription?: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onSubmit(): void {
    const formData: any = this.loginForm.value;
    const response$: Observable<any> = this.authService.login(formData);
    this.subscription = response$.subscribe(
      (response) => {
        alert(response);
        this.router.navigate(['']);
      },
      (responseError) => console.error(responseError),
      () => console.log('DONE!')
    );
  }
}
