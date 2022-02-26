import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private subscription: any;
  public user$: Observable<User>;
  constructor(private authService: AuthService, private router: Router) {
    // this.userAuthState$ = this.authService.isLoggedIn();
    this.user$ = this.authService.getUser();
  }
  logout(): void {
    const response$: Observable<any> = this.authService.logout();
    this.subscription = response$.subscribe(
      (response) => console.log(response),
      (responseError) => console.error(responseError),
      () => console.log('DONE!')
    );
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.user$ = this.authService.getUser();
    // this.userAuthState$ = this.authService.isLoggedIn();
  }
}
