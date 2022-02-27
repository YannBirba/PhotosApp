import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public user$!: Observable<User>;
  constructor(private authService: AuthService) {
    // this.userAuthState$ = this.authService.isLoggedIn();
    // this.user$ = this.authService.getUser();
  }

ngOnInit(): void {
  this.user$ = this.authService.getUser();
  // this.userAuthState$ = this.authService.isLoggedIn();
  }
}