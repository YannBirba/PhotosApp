import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from 'src/models/auth-state/auth-state.model';
import { User } from 'src/models/user/user.model';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public user$!: Observable<User>;
  public userAuthState?: AuthState;
public userAuthState$: Observable<AuthState>;
  constructor(private authService: AuthService) {
    this.userAuthState$ = this.authService.isLoggedIn();
  }

ngOnInit(): void {
  this.getUserProfile();
  this.userAuthState$ = this.authService.isLoggedIn();
  }
  getUserProfile() {
    this.user$ = this.authService.getUser();
  }

}