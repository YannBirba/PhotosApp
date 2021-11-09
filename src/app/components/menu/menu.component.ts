import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from 'src/models/auth-state/auth-state.model';
import { User } from 'src/models/user/user.model';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private subscription: any;
  public user$: Observable<User>;
  public userAuthState$: Observable<AuthState>;
  constructor(private authService: AuthService) {
    this.userAuthState$ = this.authService.isLoggedIn();
    this.user$ = this.authService.getUser();
  }
  logout(): void {
    const response$: Observable<any> = this.authService.logout();
    this.subscription = response$.subscribe(
      (response) => console.log(response),
      (responseError) => console.error(responseError),
      () => console.log('DONE!')
    );
  }
  ngOnInit(): void {
    this.user$ = this.authService.getUser();
    this.userAuthState$ = this.authService.isLoggedIn();
    }
}


